'use client'

import React, { Fragment } from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'

export default function UnityAvatarPage() {
  const { unityProvider, isLoaded, loadingProgression, requestFullscreen } =
    useUnityContext({
      loaderUrl: 'Build/Builds.loader.js',
      dataUrl: 'Build/Builds.data',
      frameworkUrl: 'Build/Builds.framework.js',
      codeUrl: 'Build/Builds.wasm',
    })

  //   if (isLoaded === false) {
  //     return <Skeleton className="h-full w-full" />
  //   }

  function handleClickEnterFullscreen() {
    requestFullscreen(true)
  }

  return (
    <Fragment>
      <div className="border-2 border-blue-400 justify-center items-center">
        <Unity
          className="border-2 border-green-500"
          unityProvider={unityProvider}
          style={{
            border: 'green',
            width: `${loadingProgression * 100}%`,
            height: 600,
            visibility: isLoaded ? 'visible' : 'hidden',
          }}
        />
        <Button variant="outline" onClick={handleClickEnterFullscreen}>
          Enter Fullscreen
        </Button>
      </div>
    </Fragment>
  )
}
