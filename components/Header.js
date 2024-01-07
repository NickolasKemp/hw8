import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} class="mr-5 hover:text-gray-900">Create to do</Link>
      <Link href={"/todos"} class="mr-5 hover:text-gray-900">My todos</Link>
    </nav>
    
  </div>
</header>
  )
}

export default Header