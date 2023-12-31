import {Alert} from '@/compaonents/bootstrap'

export default function Home() {
  return (
    <div>
      <Alert>
        <p>
          This is a simple project to showcase and learn the new <strong>NextJS</strong>
        </p>
        <ul>
          <li>static and dynamic server-side rendering</li>
          <li>incremental static regeneration</li>
          <li>client side rendering</li>
          <li>route handlers (API endpoints)</li>
          <li>meta-data API</li>
          <li>and more</li>
        </ul>
        <p className='mb-0'>
          Eveny page uses a different approach to <strong>fetching and caching data</strong>. Click the links in the nav bar to try them out.
        </p>
      </Alert>
      <Alert variant='secondary'>
        <p>Note: In order to load the data on this side, you need to get a <strong>free API key from Unsplash</strong> and add it to your <strong>.env.local</strong> file as <strong>UNSPLASH_ACCESS_KEY</strong>.</p>
        <p className='mb-0'>Unsplash has a free quota of 50 requests per hour so you might start getting errors if you try too often</p>
      </Alert>
    </div>
  )
}
