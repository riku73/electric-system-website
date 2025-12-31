"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
          <AlertTriangle className="w-10 h-10 text-red-600" />
        </div>

        <h1 className="text-3xl font-bold text-[#0D0D0D] mb-4">
          Une erreur est survenue
        </h1>

        <p className="text-[#6B6B6B] mb-8">
          Nous sommes désolés, quelque chose s&apos;est mal passé. Veuillez
          réessayer ou retourner à la page d&apos;accueil.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF9502] text-white font-semibold rounded-full hover:bg-[#E68600] transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
            Réessayer
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0D0D0D] text-white font-semibold rounded-full hover:bg-[#2D2D2D] transition-colors"
          >
            <Home className="w-5 h-5" />
            Accueil
          </Link>
        </div>

        {error.digest && (
          <p className="mt-8 text-xs text-[#9B9B9B]">
            Code erreur: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
