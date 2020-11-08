import React from 'react'
import ThemeStore from './models/theme-store'
import VideoStore from './models/video-store'

export {
  ThemeStore,
  VideoStore,
}

export const stores = {
  themeStore: new ThemeStore(),
  videoStore: new VideoStore(),
}

export const storesContext = React.createContext(stores)

export const createStoreMap = () => ({
  themeStore: new ThemeStore(),
  videoStore: new VideoStore(),
})
