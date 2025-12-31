import Link from "next/link";
import { Home, ArrowLeft, Zap } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF9502]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#FF9502]/5 rounded-full blur-[100px]" />

      <div className="max-w-lg w-full text-center relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#FF9502] text-white">
            <Zap className="w-7 h-7" />
          </div>
          <span className="font-bold text-xl text-white">ELECTRIC SYSTEM</span>
        </div>

        {/* 404 */}
        <div className="text-[150px] sm:text-[200px] font-bold text-[#FF9502]/20 leading-none select-none">
          404
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 -mt-8">
          Page introuvable
        </h1>

        <p className="text-white/60 mb-8 text-lg">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été
          déplacée.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF9502] text-white font-semibold rounded-full hover:bg-[#E68600] transition-colors shadow-lg shadow-[#FF9502]/25"
          >
            <Home className="w-5 h-5" />
            Retour à l&apos;accueil
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
