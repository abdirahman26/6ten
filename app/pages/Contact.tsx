"use client";

import Form from "@components/ui/Form";
import React, { Suspense } from "react";

export default function ContactSection() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Form />
    </Suspense>
  );
}
