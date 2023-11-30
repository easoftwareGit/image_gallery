import { UnsplashImage } from "@/models/unsplash-image"
import Image from "next/image";
import styles from './TopicPage.module.css';
import { Alert } from "@/compaonents/bootstrap";
import { Metadata } from "next";

// export const revalidate = 0; // dont cache data

interface TopicProps {
  params: { topic: string },
  // searchParams: {[key: string]: string | string[] | undefined } , // gets query params
}

// export const dynamicParams = false; // forces param to be in generateStaticParams list 

export function generateMetadata({ params: { topic } }: TopicProps): Metadata {
  return {
    title: topic + ' - NextJS 14'
  }
}

export function generateStaticParams() {
  return ["fruit", "sports", "beach"].map(topic => ({ topic }));  
}

export default async function Topic({ params: { topic } }: TopicProps) {  
  const response = await fetch(`https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
  const images: UnsplashImage[] = await response.json();
  return (
    <div>
      <Alert>
        This page uses <strong>generateStaticParams</strong> to render and cache static pages at build time even though the URL has a dynamic parameter.
        Pages that are not included in generateStaticParams will be fetched and rendered on first access and then <strong>cached for subsequent requests</strong> (this can be disabled).
      </Alert>

      <h1>{topic}</h1>
      {
        images.map(image => (
          <Image
            key={image.urls.raw}
            src={image.urls.raw}
            width={250}
            height={250}
            alt={image.description}
            className={styles.image}
          />
        ))
      }
    </div>
  )
}