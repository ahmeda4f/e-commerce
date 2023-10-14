import React from 'react';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Notfound from './Notfound/Notfound';
import Register from './Register/Register';
import Login from './Login/Login';
import AuthcontextProvider from './Contexts/Context/AuthContext';
import Cart from './Cart/Cart';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'; // Import the ProtectedRoute component
import Products from './Products/Products';
import Categories from './Categories/Categories';
import Brands from './Brands/Brands';
import Productdetails from './Productdetails/Productdetails';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import Address from './Address/Address';
import Orders from './Orders/Orders';
import Wish from './Wish/Wish';
import Verify from './Verify/Verify';
import SendCode from './SendCode/SendCode';
import Form2 from './Form2/Form2';





function App() {
  let queryClient = new QueryClient()
  const routers = createHashRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'home', element:  <ProtectedRoute><Home/></ProtectedRoute> }, // Use ProtectedRoute to protect the Home route
        { path: 'register', element :<Register/> }, // Use ProtectedRoute to protect the Register route
        { path: 'login', element: <Login/> }, // Use ProtectedRoute to protect the Login route
        {path: 'products', element: <ProtectedRoute><Products/></ProtectedRoute>},
        {path: 'categories', element: <ProtectedRoute><Categories/></ProtectedRoute>},
        {path: 'Brands', element: <ProtectedRoute><Brands/></ProtectedRoute>},
        { path: 'Productdetails/:id', element: <ProtectedRoute><Productdetails/></ProtectedRoute> },
        { path: 'allorders', element: <Orders /> },
        { path: 'wishlist', element: <ProtectedRoute><Wish /></ProtectedRoute> },
        { path: 'reset', element: <Verify /> },
        { path: 'sendcode', element: <SendCode /> },
        { path: 'resetdata', element:<Form2/>},
        { path: 'cart', element: <ProtectedRoute><Cart/></ProtectedRoute> }, // Use ProtectedRoute to protect the Cart route
        { path: 'address/:cartId', element: <ProtectedRoute><Address/></ProtectedRoute> }, // Use ProtectedRoute to protect the Cart route
        { path: '*', element: <Notfound /> },
      ],
//  children: [
//         { path: 'home', element:  <Home/> }, // Use ProtectedRoute to protect the Home route
//         { path: 'register', element :<Register/> }, // Use ProtectedRoute to protect the Register route
//         { path: 'login', element: <Login/> }, // Use ProtectedRoute to protect the Login route
//         {path: 'products', element: <Products/>},
//         {path: 'categories', element: <Categories/>},
//         {path: 'Brands', element: <Brands/>},
//         { path: 'Productdetails/:id', element: <Productdetails/> },
//         { path: 'allorders', element: <Orders /> },
//         { path: 'wishlist', element:<Wish/>},
//         { path: 'cart', element: <Cart/> }, // Use ProtectedRoute to protect the Cart route
//         { path: 'address/:cartId', element: <Address/> }, // Use ProtectedRoute to protect the Cart route
//         { path: '*', element: <Notfound /> },
//       ],
    },
  ]);

  return (
  <Provider store={store}>
     <QueryClientProvider client={queryClient}>
     <AuthcontextProvider>
      <RouterProvider router={routers} />
    </AuthcontextProvider>
    <ReactQueryDevtools/>
   </QueryClientProvider>
  </Provider>
  );
}

export default App;

