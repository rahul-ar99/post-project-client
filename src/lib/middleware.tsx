// import { NextRequest, NextResponse } from 'next/server';

// export function middleware(req: NextRequest) {
//   // Log the request URL
//   console.log(`Request received: ${req.url}`);

//   // Simulate an authentication check
//   const isAuthenticated = false; // Replace with your actual authentication logic

//   if (!isAuthenticated) {
//     // Redirect to the login page if the user is not authenticated
//     return NextResponse.redirect(new URL('/login', req.url));
//   }

//   // Proceed with the request if the user is authenticated
//   return NextResponse.next();
// }


// export function middleware(){
//     console.log("this is middleware")
// }