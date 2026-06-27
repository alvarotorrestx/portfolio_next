"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityProvider() {
  useEffect(() => {
    const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

    if (process.env.NODE_ENV === "production" && clarityId) {
      Clarity.init(clarityId);
    }
  }, []);

  return null;
}