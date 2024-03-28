import { Route, Routes } from "react-router-dom";

import { Default } from "./layouts/default.tsx";

import { NotFound } from "./pages/not-found.tsx";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route index element={<h1 />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
