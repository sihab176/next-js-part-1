import { NextResponse } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export function middleware(request) {

    const currentCookie=request.cookies.get("nextjs-token")
    console.log(currentCookie.value);

    const dummyUserData={
        role :"admin",
        email: "test@gmail.com"
    }
    const isAdmin= dummyUserData.role=="admin"

    // console.log(request.nextUrl.pathname.startsWith("/services"));
    let isServices=request.nextUrl.pathname.startsWith("/services")

if(isServices && !isAdmin){
    return NextResponse.redirect(new URL('/login',request.url))
}
  return NextResponse.next()
}
 
