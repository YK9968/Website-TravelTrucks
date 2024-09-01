import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import TruckFeatures from "../TruckFeatures/TruckFeatures";
import TruckReviews from "../TruckReviews/TruckReviews";
import NotFound from "../../pages/NotFound/NotFound";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const DetailsTruckPage = lazy(() =>
  import("../../pages/DetailsTruckPage/DetailsTruckPage")
);

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:truckId" element={<DetailsTruckPage />}>
          <Route index element={<TruckFeatures />} />
          <Route path="features" element={<TruckFeatures />} />
          <Route path="reviews" element={<TruckReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
