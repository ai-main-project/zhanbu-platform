"use client"

import dynamic from 'next/dynamic'

export const DynamicStarrySky = dynamic(() =>
  import('@/components/common/starry-sky').then((mod) => mod.StarrySky),
  { ssr: false }
)
