import { PropsWithChildren } from "react";

export default function ErrorMessage({children}: PropsWithChildren) {
  return (
    <div className="bg-red-600 p-2 text-white text-center text-sm font-bold">
      {children}
    </div>
  )
}
