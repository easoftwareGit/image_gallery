import { UnsplashUser } from "@/models/unsplash-user";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from 'react';
import { Alert } from "@/compaonents/bootstrap";

interface UserProps {
  params: { username: string },   
}

async function getUser(username: string): Promise<UnsplashUser> {
  const response = await fetch(`https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`);

  if (response.status === 404) notFound();

  return await response.json();  
}

// if not using fetch (axios, other) in getUser, use getUserCached so request will only happen once. after first request, data will be cached
// const getUserCached = cache(getUser)

export async function generateMetadata({ params: { username } }: UserProps): Promise<Metadata> {
  const user = await getUser(username);
  // const user = await getUserCached(username);  // see comment above getUserCached

  return {
    title: ([user.first_name, user.last_name].filter(Boolean).join(' ') || user.username) + ' - NextJS 14',
  }
}

export default async function User({ params: { username } }: UserProps) {  

  const user = await getUser(username);
  // const user = await getUserCached(username);  // see comment above getUserCached
  return (
    <div>

      <Alert>
        This profile page uses <strong>generateMetadata</strong> to set the <strong>page title</strong> dynamically from the API response.
      </Alert>

      <h1>{user.username}</h1>
      <p>First name: {user.first_name}</p>
      <p>Last name: {user.last_name}</p>
      <a href={'https://unsplash.com/' + user.username}>Unsplash profile</a>
    </div>
  )

}