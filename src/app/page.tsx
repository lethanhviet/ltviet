import Link from 'next/link'
import { Suspense } from 'react'
import { ScrollArea } from '@/components/scroll-area'
import { Button } from '@/components/ui/button'

import FloatingHeader from '@/components/floating-header'
import PageTitle from '@/components/page-title'
import LoadingSpinner from '@/components/loading-spinner'
import WritingList from '@/components/writing-list'
import { getAllPosts } from '@/lib/contentful'
import { getSortedPosts } from '@/lib/utils'

async function fetchData() {
  const allPosts = await getAllPosts()
  return { allPosts }
}

export default async function Home() {
  const { allPosts } = await fetchData()
  const sortedPosts = getSortedPosts(allPosts)

  return (
    <ScrollArea hasScrollTitle>
      <FloatingHeader scrollTitle="Tristan Ruan" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Home" className="lg:hidden" />
          <p>
            {`Hi! 👋 I'm Viet. I currently live in Hanoi, Vietnam.`}
          </p>
          <p>
            {`I am currently a Sales Manager at New Century Int'l. Previously, was a Corporate Relationship
            Manager at HSBC Vietnam.`}
          </p>
          <p>
            This site is my personal space where I collect and share my interests, thoughts, and every other things.
          </p>
          <Button asChild variant="link" className="inline px-0">
            <Link href="/writing">
              <h2 className="mb-4 mt-8">Writing</h2>
            </Link>
          </Button>
          <Suspense fallback={<LoadingSpinner />}>
            <WritingList items={sortedPosts} />
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  )
}
