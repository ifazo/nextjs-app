
import BuilderList from '@/components/BuilderList'
import React from 'react'

export default function builder() {
  return (
    <div>
      <BuilderList />
    </div>
  )
}

// export async function getServerSideProps() {
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()
//   return { props: { data } }
// }

