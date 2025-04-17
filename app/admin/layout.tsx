import AdminNav from '../components/AdminNav'

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <AdminNav></AdminNav>
      <div className='p-4 mx-auto w-[1600px] min-h-screen bg-white '>{children}</div>
    </>
  )
}
