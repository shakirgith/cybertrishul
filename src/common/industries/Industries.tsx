"use client";

import IndustriesHeader from "./IndustriesHeader";
import IndustriesGrid from "./IndustriesGrid";
import ProcessTimeline from "./ProcessTimeline";

export default function Industries() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <IndustriesHeader />

        <IndustriesGrid />

        <ProcessTimeline />

      </div>
    </section>
  );
}