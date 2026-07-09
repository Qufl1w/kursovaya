import ChatWidget from '@/components/ChatWidget'

export default async function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <>
      {children}
      <ChatWidget courseId={id} />
    </>
  )
}