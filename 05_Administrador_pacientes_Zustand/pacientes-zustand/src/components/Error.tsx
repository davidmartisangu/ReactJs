
export default function Error({children}: {children:React.ReactNode}) {
  return (
    <p className=" bg-red-600 text-white text-sm font-bold text-center p-3 uppercase my-4">{children}</p>
  )
}
