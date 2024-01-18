import "./App.css";
import { Centerbody } from "./components/Centerbody/Centerbody";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";
import { Cart } from "./components/Cart/Cart";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/Signup/Signup";

function App() {
  let products = [
    {
      _id: '1',
      name: "HOOPS 3.0 LOW CLASSIC VINTAGE SHOES",
      price: 56,
      discountedPrice: 50,
      colors: ["Grey Two", "Collegiate Green", "Cloud White"],
      sizes: [
        "UK 6",
        "UK 6.5",
        "UK 7",
        "UK7.5",
        "UK 8",
        "UK 8.5",
        "UK 9",
        "UK 11.5",
        "UK 11.5",
        "UK 9.5",
        "UK 10",
        "UK 10.5",
        "UK 11",
        "UK 11.5",
      ],
      images: [
        `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct2Main.png%3Falt%3Dmedia%26token%3D8a15e1a3-6514-4d4f-ab80-135efb35b59c&w=640&q=75`
        ,
        `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct2min.avif%3Falt%3Dmedia%26token%3D7bbd4088-efb3-4278-9ef5-c4b4b29f84fc&w=640&q=75`,
        `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct2min2.avif%3Falt%3Dmedia%26token%3D67a47b57-bbd8-47cd-86f1-c8044dc6a2d2&w=640&q=75`
      ],
      detail: "very comfertable and soft shoes easy to wear and good for walk",
    },

    {
      _id: '2',
      name: "HOOPS 3.0 LOW CLASSIC VINTAGE SHOES",
      price: 56,
      discountedPrice: 50,
      colors: ["Grey Two", "Collegiate Green", "Cloud White"],
      sizes: [
        "UK 6",
        "UK 6.5",
        "UK 7",
        "UK7.5",
        "UK 8",
        "UK 8.5",
        "UK 9",
        "UK 11.5",
        "UK 11.5",
        "UK 9.5",
        "UK 10",
        "UK 10.5",
        "UK 11",
        "UK 11.5",
      ],
      images: [
        `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct2Main.png%3Falt%3Dmedia%26token%3D8a15e1a3-6514-4d4f-ab80-135efb35b59c&w=640&q=75`
        ,
        `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct2min.avif%3Falt%3Dmedia%26token%3D7bbd4088-efb3-4278-9ef5-c4b4b29f84fc&w=640&q=75`,
        `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct2min2.avif%3Falt%3Dmedia%26token%3D67a47b57-bbd8-47cd-86f1-c8044dc6a2d2&w=640&q=75`
      ],
      detail: "very comfertable and soft shoes easy to wear and good for walk",
    },

    {
      _id: '3',
      name: "HOOPS 3.0 LOW CLASSIC VINTAGE SHOES",
      price: 56,
      discountedPrice: 50,
      colors: ["Grey Two", "Collegiate Green", "Cloud White"],
      sizes: [
        "UK 6",
        "UK 6.5",
        "UK 7",
        "UK7.5",
        "UK 8",
        "UK 8.5",
        "UK 9",
        "UK 11.5",
        "UK 11.5",
        "UK 9.5",
        "UK 10",
        "UK 10.5",
        "UK 11",
        "UK 11.5",
      ],
      images: [
        `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct2Main.png%3Falt%3Dmedia%26token%3D8a15e1a3-6514-4d4f-ab80-135efb35b59c&w=640&q=75`
        ,
        `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct2min.avif%3Falt%3Dmedia%26token%3D7bbd4088-efb3-4278-9ef5-c4b4b29f84fc&w=640&q=75`,
        `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct2min2.avif%3Falt%3Dmedia%26token%3D67a47b57-bbd8-47cd-86f1-c8044dc6a2d2&w=640&q=75`
      ],
      detail: "very comfertable and soft shoes easy to wear and good for walk",
    },

    {
      _id: '4',
      name: "HOOPS 3.0 LOW CLASSIC VINTAGE SHOES",
      price: 56,
      discountedPrice: 50,
      colors: ["Grey Two", "Collegiate Green", "Cloud White"],
      sizes: [
        "UK 6",
        "UK 6.5",
        "UK 7",
        {
          name: "HOOPS 3.0 LOW CLASSIC VINTAGE SHOES",
          price: 56,
          discountedPrice: 50,
          colors: ["Grey Two", "Collegiate Green", "Cloud White"],
          sizes: [
            "UK 6",
            "UK 6.5",
            "UK 7",
            "UK7.5",
            "UK 8",
            "UK 8.5",
            "UK 9",
            "UK 11.5",
            "UK 11.5",
            "UK 9.5",
            "UK 10",
            "UK 10.5",
            "UK 11",
            "UK 11.5",
          ],
          images: [
            `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct2Main.png%3Falt%3Dmedia%26token%3D8a15e1a3-6514-4d4f-ab80-135efb35b59c&w=640&q=75`
            ,
            `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct2min.avif%3Falt%3Dmedia%26token%3D7bbd4088-efb3-4278-9ef5-c4b4b29f84fc&w=640&q=75`,
            `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct2min2.avif%3Falt%3Dmedia%26token%3D67a47b57-bbd8-47cd-86f1-c8044dc6a2d2&w=640&q=75`
          ],
          detail: "very comfertable and soft shoes easy to wear and good for walk",
        }, "UK7.5",
        "UK 8",
        "UK 8.5",
        "UK 9",
        "UK 11.5",
        "UK 11.5",
        "UK 9.5",
        "UK 10",
        "UK 10.5",
        "UK 11",
        "UK 11.5",
      ],
      images: [
        `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct2Main.png%3Falt%3Dmedia%26token%3D8a15e1a3-6514-4d4f-ab80-135efb35b59c&w=640&q=75`
        ,
        `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct2min.avif%3Falt%3Dmedia%26token%3D7bbd4088-efb3-4278-9ef5-c4b4b29f84fc&w=640&q=75`,
        `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct2min2.avif%3Falt%3Dmedia%26token%3D67a47b57-bbd8-47cd-86f1-c8044dc6a2d2&w=640&q=75`
      ],
      detail: "very comfertable and soft shoes easy to wear and good for walk",
    },

    {
      _id: '5',
      name: "HOOPS 3.0 LOW CLASSIC VINTAGE SHOES",
      price: 56,
      discountedPrice: 50,
      colors: ["Grey Two", "Collegiate Green", "Cloud White"],
      sizes: [
        "UK 6",
        "UK 6.5",
        "UK 7",
        "UK7.5",
        "UK 8",
        "UK 8.5",
        "UK 9",
        "UK 11.5",
        "UK 11.5",
        "UK 9.5",
        "UK 10",
        "UK 10.5",
        "UK 11", {
          name: "HOOPS 3.0 LOW CLASSIC VINTAGE SHOES",
          price: 56,
          discountedPrice: 50,
          colors: ["Grey Two", "Collegiate Green", "Cloud White"],
          sizes: [
            "UK 6",
            "UK 6.5",
            "UK 7",
            "UK7.5",
            "UK 8",
            "UK 8.5",
            "UK 9",
            "UK 11.5",
            "UK 11.5",
            "UK 9.5",
            "UK 10",
            "UK 10.5",
            "UK 11",
            "UK 11.5",
          ],
          images: [
            `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct2Main.png%3Falt%3Dmedia%26token%3D8a15e1a3-6514-4d4f-ab80-135efb35b59c&w=640&q=75`
            ,
            `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct2min.avif%3Falt%3Dmedia%26token%3D7bbd4088-efb3-4278-9ef5-c4b4b29f84fc&w=640&q=75`,
            `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct2min2.avif%3Falt%3Dmedia%26token%3D67a47b57-bbd8-47cd-86f1-c8044dc6a2d2&w=640&q=75`
          ],
          detail: "very comfertable and soft shoes easy to wear and good for walk",
        },
        "UK 11.5",
      ],
      images: [
        `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct2Main.png%3Falt%3Dmedia%26token%3D8a15e1a3-6514-4d4f-ab80-135efb35b59c&w=640&q=75`
        ,
        `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct2min.avif%3Falt%3Dmedia%26token%3D7bbd4088-efb3-4278-9ef5-c4b4b29f84fc&w=640&q=75`,
        `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct2min2.avif%3Falt%3Dmedia%26token%3D67a47b57-bbd8-47cd-86f1-c8044dc6a2d2&w=640&q=75`
      ],
      detail: "very comfertable and soft shoes easy to wear and good for walk",
    },
  ];
  return (
    <>
      <div>
        <Header />
      </div>

      <Routes>


        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/" element={<Centerbody />} />
        <Route path={`/product-details/:id`} element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
