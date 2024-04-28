import { createApi } from 'unsplash-js'

const options = {
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY!,
  fetch,
}

export const unsplash = createApi(options)
