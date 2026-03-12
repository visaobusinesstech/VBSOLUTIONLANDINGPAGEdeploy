"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useEffect, useState, useCallback } from "react";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ShinyButton } from "./shiny-button";
import { Badge } from "@/components/ui/badge";
import { Check, Cpu, Expand, Lock, Sparkles, Volume2, VolumeX, Zap } from "lucide-react";
import { getWhatsAppUrl } from "@/utils/whatsapp";
import { motion } from "motion/react";
import { useScroll, useTransform, motion as fmotion, MotionValue as FMotionValue } from "framer-motion";
import vendasImg from "@/fotos/Prints do VBSolution/vendas.png";
import atividadesImg from "@/fotos/Prints do VBSolution/Atividades.jpeg";
import dashboardImg from "@/fotos/Prints do VBSolution/dashboard.jpeg";
import iaImg from "@/fotos/Prints do VBSolution/IAfunc.jpeg";
import emailImg from "@/fotos/Prints do VBSolution/e-mail.jpeg";
import whatsappPrintImg from "@/fotos/Prints do VBSolution/whatsapp.jpeg";
import iaVideoSrc from "@/fotos/IA.video.mp4";
import videoIA from "@/fotos/videoIA.mov";
import vendasPipelineVideo from "@/fotos/vendas01.mov";
import IntegracoesOficiais from "@/components/IntegracoesOficiais";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import heroImg1 from "@/fotos/foto hero/Atividades.jpeg";
import heroImg2 from "@/fotos/foto hero/vendas.png";
import heroImg3 from "@/fotos/foto hero/whatsapp.jpg";
import logooImg from "@/fotos/logoo.png";
import { Features as Features9 } from "@/components/ui/features-9";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { CallToAction } from "@/components/ui/cta-3";
import { Dialog, DialogContent } from "@/components/ui/dialog";

gsap.registerPlugin(useGSAP);

interface ShaderPlaneProps {
  vertexShader: string;
  fragmentShader: string;
  uniforms: { [key: string]: { value: unknown } };
}

const ShaderPlane = ({
  vertexShader,
  fragmentShader,
  uniforms,
}: ShaderPlaneProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      const uniforms = material.uniforms as Record<string, THREE.IUniform>;
      (uniforms.u_time.value as number) = state.clock.elapsedTime * 0.5;
      (uniforms.u_resolution.value as THREE.Vector3).set(
        size.width,
        size.height,
        1.0
      );
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.FrontSide}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
};

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  varying vec2 vUv;
  uniform float u_time;
  uniform vec3 u_resolution;
  uniform sampler2D u_channel0;

  vec2 toPolar(vec2 p) {
      float r = length(p);
      float a = atan(p.y, p.x);
      return vec2(r, a);
  }

  vec2 fromPolar(vec2 polar) {
      return vec2(cos(polar.y), sin(polar.y)) * polar.x;
  }

  void mainImage(out vec4 fragColor, in vec2 fragCoord) {
      vec2 p = 6.0 * ((fragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y);

      vec2 polar = toPolar(p);
      float r = polar.x;
      float a = polar.y;

      vec2 i = p;
      float c = 0.0;
      float rot = r + u_time + p.x * 0.100;
      for (float n = 0.0; n < 4.0; n++) {
          float rr = r + 0.15 * sin(u_time*0.7 + float(n) + r*2.0);
          p *= mat2(
              cos(rot - sin(u_time / 10.0)), sin(rot),
              -sin(cos(rot) - u_time / 10.0), cos(rot)
          ) * -0.25;

          float t = r - u_time / (n + 30.0);
          i -= p + sin(t - i.y) + rr;

          c += 2.2 / length(vec2(
              (sin(i.x + t) / 0.15),
              (cos(i.y + t) / 0.15)
          ));
      }

      c /= 8.0;

      vec3 baseA = vec3(1.0, 1.0, 1.0); // white
      vec3 baseB = vec3(0.376, 0.647, 0.980); // lighter blue #60a5fa
      float t = smoothstep(0.0, 1.0, c * 0.52);
      vec3 finalColor = mix(baseA, baseB, t);

      fragColor = vec4(finalColor, 1.0);
  }

  void main() {
      vec4 fragColor;
      vec2 fragCoord = vUv * u_resolution.xy;
      mainImage(fragColor, fragCoord);
      gl_FragColor = fragColor;
  }
`;

const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-auto flex items-center justify-center relative p-0"
      ref={containerRef}
    >
      <div
        className="py-0 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

const Header = ({ translate, titleComponent }: any) => {
  return (
    <fmotion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </fmotion.div>
  );
};

const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: FMotionValue<number>;
  scale: FMotionValue<number>;
  translate: FMotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <fmotion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="inline-block mx-auto border-2 border-gray-200 p-0 bg-transparent rounded-[24px] shadow-2xl"
    >
      {children}
    </fmotion.div>
  );
};

const testimonials = [
  {
    text:
      "Antes era tudo no e-mail e planilha — agora temos um pipeline claro, previsível e as vendas subiram 38% neste mês.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Marina Ferreira",
    role: "Diretora Comercial",
  },
  {
    text:
      "Integrar WhatsApp, IA e os nossos dados de vendas foi um divisor de águas. Reduzimos o tempo de resposta ao lead de 24h para menos de 5 minutos.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Carlos Henrique",
    role: "CEO",
  },
  {
    text:
      "O Agente de IA do VBSolution antecipou o interesse de clientes e qualificou leads automaticamente. Nossa equipe agora foca só nos fechamentos altos.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Paula Andrade",
    role: "Head de Growth",
  },
  {
    text:
      "Nunca tivemos dashboards tão claros. Conseguimos enxergar gargalos e oportunidades com métricas que realmente importam.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Leonardo Bruno",
    role: "Gerente de Operações",
  },
  {
    text:
      "Com o VBSolution, nosso fluxo de e-mail marketing ficou 4x mais eficiente. Os leads engajam mais e fechamos mais negócios sem esforço manual.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Laura Montoya",
    role: "Marketing Manager",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => null),
        ]}
      </motion.div>
    </div>
  );
};

interface HeroProps {
  title: string;
  description: string;
  badgeText?: string;
  badgeLabel?: string;
  ctaButtons?: Array<{ text: string; href?: string; primary?: boolean }>;
  microDetails?: Array<string>;
}

const VideoIASection = ({
  openMedia,
}: {
  openMedia: (m: { type: "video" | "image"; src: string; alt?: string }) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [captionsOn, setCaptionsOn] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const applyCaptions = useCallback(() => {
    const el = videoRef.current;
    if (!el?.textTracks?.length) return;
    el.textTracks[0].mode = captionsOn ? "showing" : "hidden";
  }, [captionsOn]);

  useEffect(() => {
    applyCaptions();
  }, [applyCaptions]);

  return (
    <div className="aspect-video relative overflow-hidden rounded-2xl">
      <div
        className="absolute inset-0 cursor-pointer group"
        role="button"
        tabIndex={0}
        aria-label="Ampliar vídeo em tela cheia"
        onClick={() => openMedia({ type: "video", src: videoIA })}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openMedia({ type: "video", src: videoIA })}
      >
        <video
          ref={videoRef}
          src={videoIA}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          onLoadedMetadata={applyCaptions}
          className="absolute inset-0 w-full h-full object-cover object-center saturate-110 pointer-events-none"
        >
          <track kind="captions" src="/legendas-videoIA.vtt" srcLang="pt-BR" label="Legendas" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3b]/70 via-transparent to-transparent pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 [background:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-black/0 group-hover:bg-black/25 transition-colors duration-200 pointer-events-none">
          <div className="rounded-full bg-white/20 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Expand className="size-8 text-white" strokeWidth={2} />
          </div>
          <span className="text-sm font-medium text-white drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Clique para ampliar
          </span>
        </div>
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 text-white/80 text-xs pointer-events-none">
          <Expand className="size-3.5" />
          <span>Ampliar</span>
        </div>
      </div>
      <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2">
        <button
          type="button"
          className="px-2 py-1 rounded text-xs font-medium bg-black/50 text-white/90 hover:bg-black/70 transition-opacity flex items-center gap-1.5"
          onClick={(e) => {
            e.stopPropagation();
            setCaptionsOn((on) => !on);
          }}
          aria-label={captionsOn ? "Desativar legendas" : "Ativar legendas"}
          data-state={captionsOn ? "on" : "off"}
        >
          {captionsOn ? "Legendas: On" : "Legendas"}
        </button>
        <button
          type="button"
          className="px-2 py-1 rounded text-xs font-medium bg-blue-600/80 text-white hover:bg-blue-600 transition-opacity flex items-center gap-1.5"
          onClick={(e) => {
            e.stopPropagation();
            setIsMuted((m) => !m);
          }}
          aria-label={isMuted ? "Ouvir áudio do vídeo" : "Silenciar vídeo"}
        >
          {isMuted ? (
            <>
              <VolumeX className="size-3.5" />
              <span>Ouvir áudio</span>
            </>
          ) : (
            <>
              <Volume2 className="size-3.5" />
              <span>Áudio ligado</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

const VideoVendasSection = ({
  openMedia,
}: {
  openMedia: (m: { type: "video" | "image"; src: string; alt?: string }) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [captionsOn, setCaptionsOn] = useState(false);

  const applyCaptions = useCallback(() => {
    const el = videoRef.current;
    if (!el?.textTracks?.length) return;
    el.textTracks[0].mode = captionsOn ? "showing" : "hidden";
  }, [captionsOn]);

  useEffect(() => {
    applyCaptions();
  }, [applyCaptions]);

  return (
    <div className="aspect-video relative overflow-hidden rounded-2xl">
      <div
        className="absolute inset-0 cursor-pointer group"
        role="button"
        tabIndex={0}
        aria-label="Ampliar vídeo em tela cheia"
        onClick={() => openMedia({ type: "video", src: vendasPipelineVideo })}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openMedia({ type: "video", src: vendasPipelineVideo })}
      >
        <video
          ref={videoRef}
          src={vendasPipelineVideo}
          autoPlay
          muted
          loop
          playsInline
          onLoadedMetadata={applyCaptions}
          className="absolute inset-0 w-full h-full object-cover object-center saturate-110 pointer-events-none"
        >
          <track kind="captions" src="/legendas-vendas.vtt" srcLang="pt-BR" label="Legendas" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3b]/70 via-transparent to-transparent pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 [background:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-black/0 group-hover:bg-black/25 transition-colors duration-200 pointer-events-none">
          <div className="rounded-full bg-white/20 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Expand className="size-8 text-white" strokeWidth={2} />
          </div>
          <span className="text-sm font-medium text-white drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Clique para ampliar
          </span>
        </div>
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 text-white/80 text-xs pointer-events-none">
          <Expand className="size-3.5" />
          <span>Ampliar</span>
        </div>
      </div>
      <button
        type="button"
        className="absolute bottom-3 left-3 z-20 px-2 py-1 rounded text-xs font-medium bg-black/50 text-white/90 hover:bg-black/70 transition-opacity"
        onClick={() => setCaptionsOn((on) => !on)}
        aria-label={captionsOn ? "Desativar legendas" : "Ativar legendas"}
        data-state={captionsOn ? "on" : "off"}
      >
        {captionsOn ? "Legendas: On" : "Legendas"}
      </button>
    </div>
  );
};

const SyntheticHero = ({
  title = "O seu último e melhor CRM",
  description = "O VBsolution é um CRM focado em vendas, com inteligência artificial para centralizar processos, equipes e resultados em um único sistema.",
  badgeText = "Para agencias de Marketing & SaaS",
  badgeLabel = "Para agencias de Marketing & SaaS",
  ctaButtons = [
    { text: "Agendar Demonstração", href: getWhatsAppUrl(), primary: true },
    { text: "Saiba mais", href: "#learn-more" },
  ],
  microDetails = [
    "Immersive shader landscapes",
    "Hand-tuned motion easing",
    "Responsive, tactile feedback",
  ],
}: HeroProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const badgeWrapperRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const microRef = useRef<HTMLUListElement | null>(null);
  const blurbRef = useRef<HTMLDivElement | null>(null);
  const [blurbHeight, setBlurbHeight] = useState<number>(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const shaderUniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector3(1, 1, 1) },
      u_channel0: { value: null },
    }),
    []
  );
  const [mediaOpen, setMediaOpen] = useState(false);
  const [media, setMedia] = useState<{ type: "video" | "image"; src: string; alt?: string } | null>(null);

  const openMedia = (m: { type: "video" | "image"; src: string; alt?: string }) => {
    setMedia(m);
    setMediaOpen(true);
  };

  useEffect(() => {
    const update = () => {
      setBlurbHeight(blurbRef.current?.offsetHeight ?? 0);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!carouselApi) return;
    const id = setInterval(() => {
      try { carouselApi.scrollNext(); } catch {}
    }, 3500);
    return () => clearInterval(id);
  }, [carouselApi]);

  useGSAP(
    () => {
      if (!headingRef.current) return;

      const microItems = microRef.current
        ? Array.from(microRef.current.querySelectorAll("li"))
        : [];

      gsap.set(headingRef.current, { filter: "blur(16px)", y: 24, autoAlpha: 0, scale: 1.02, transformOrigin: "50% 100%" });
      if (badgeWrapperRef.current) gsap.set(badgeWrapperRef.current, { autoAlpha: 0, y: -8 });
      if (paragraphRef.current) gsap.set(paragraphRef.current, { autoAlpha: 0, y: 8 });
      if (ctaRef.current) gsap.set(ctaRef.current, { autoAlpha: 0, y: 8 });
      if (microItems.length > 0) gsap.set(microItems, { autoAlpha: 0, y: 6 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
      if (badgeWrapperRef.current) tl.to(badgeWrapperRef.current, { autoAlpha: 1, y: 0 }, 0);
      tl.to(headingRef.current, { autoAlpha: 1, y: 0, filter: "blur(0px)", scale: 1 }, 0.1);
      if (paragraphRef.current) tl.to(paragraphRef.current, { autoAlpha: 1, y: 0 }, "-=0.4");
      if (ctaRef.current) tl.to(ctaRef.current, { autoAlpha: 1, y: 0 }, "-=0.6");
      if (microItems.length > 0) tl.to(microItems, { autoAlpha: 1, y: 0, stagger: 0.05 }, "-=0.6");
    },
    { scope: sectionRef }
  );

  const modules = [
    {
      title: "Pipeline de Vendas",
      description: "Funil visual para organizar oportunidades e prever fechamentos.",
      image: vendasImg,
    },
    {
      title: "Gestão de Atividades e Projetos",
      description: "Tarefas, prazos e responsáveis em um único fluxo organizado.",
      image: atividadesImg,
    },
    {
      title: "Dashboards Inteligentes",
      description: "Métricas em tempo real para decisões rápidas e estratégicas.",
      image: dashboardImg,
    },
    {
      title: "WhatsApp Integrado",
      description: "Atendimento e vendas centralizados com histórico completo.",
      image: whatsappPrintImg,
    },
    {
      title: "Agente de IA Personalizado",
      description: "IA treinada com as regras do seu negócio para automatizar processos.",
      image: iaImg,
    },
    {
      title: "E-mail Marketing Automatizado",
      description: "Campanhas, fluxos e nutrição de leads de forma automática.",
      image: emailImg,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[62vh] md:min-h-[80vh] w-full overflow-hidden"
    >
      
          <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-14 text-center">
          <div className="mt-16 md:mt-24 lg:mt-32 min-h-[66vh] flex flex-col items-center justify-center">
            <div className="w-full max-w-2xl px-3 md:px-4 -mt-2 md:-mt-3 mb-2">
              <div className="flex items-center justify-center -space-x-2 rtl:space-x-reverse">
                <img
                  className="h-6 w-6 md:h-7 md:w-7 rounded-full border border-white/20 object-cover"
                  src="https://images.unsplash.com/photo-1524503033411-c9566986fc8f?q=80&w=200&auto=format&fit=crop"
                  alt="Pessoa 1"
                  width={28}
                  height={28}
                />
                <img
                  className="h-6 w-6 md:h-7 md:w-7 rounded-full border border-white/20 object-cover"
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop"
                  alt="Pessoa 2"
                  width={28}
                  height={28}
                />
                <img
                  className="h-6 w-6 md:h-7 md:w-7 rounded-full border border-white/20 object-cover"
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop"
                  alt="Pessoa 3"
                  width={28}
                  height={28}
                />
                <span className="animated-blue-border flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-white/5 text-[10px] md:text-[11px] font-medium text-white">
                  +99
                </span>
              </div>
            </div>
            <img
              src={logooImg}
              alt="Pipeline de Vendas"
              className="mx-auto mb-2 w-28 md:w-40 h-auto"
            />
            <h1
              ref={headingRef}
              className="text-3xl md:text-5xl font-normal leading-tight text-white tracking-tight"
            >
              {title && title.includes("CRM") ? (
                <>
                  {title.split("CRM")[0]}
                  <span className="text-[#0f2b8f]">CRM</span>
                  {title.split("CRM")[1]}
                </>
              ) : (
                title
              )}
            </h1>
            <p
              ref={paragraphRef}
              className="mt-4 text-xs sm:text-sm md:text-lg text-neutral-300 max-w-2xl mx-auto"
            >
              {description}
            </p>
            <div ref={ctaRef} className="mt-5 flex flex-wrap gap-3 sm:gap-4 justify-center">
              {ctaButtons?.map((btn, i) => (
                <a key={i} href={btn.href || "#"} className="inline-block">
                  <ShinyButton
                    className={btn.primary ? "" : "opacity-90 hover:opacity-100"}
                    variant={btn.primary ? "solid" : "ghost"}
                    size="sm"
                    speed={btn.primary ? "normal" : "slow"}
                    animated={btn.primary ? true : false}
                  >
                    {btn.primary ? (
                      <span className="text-[11px] sm:text-base">{btn.text}</span>
                    ) : (
                      <span className="text-xs sm:text-base">{btn.text}</span>
                    )}
                  </ShinyButton>
                </a>
              ))}
            </div>
            <div className="mt-6 md:mt-8 lg:mt-10 w-full flex justify-center">
              <Carousel
                className="relative w-full max-w-xl md:max-w-2xl mx-auto rounded-t-[42px]"
                setApi={setCarouselApi}
              >
                <CarouselContent>
                  {[heroImg2].map((src, idx) => (
                    <CarouselItem key={idx}>
                      <div className="relative overflow-hidden rounded-t-[42px]">
                        <img
                          src={src}
                          alt={`Hero ${idx + 1}`}
                          className="block w-full h-auto max-h-72 md:max-h-80 object-cover rounded-t-[42px] cursor-zoom-in"
                          onClick={() => openMedia({ type: "image", src, alt: "Vendas" })}
                          style={{
                            WebkitMaskImage:
                              "linear-gradient(to bottom, rgba(0,0,0,1) 38%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0) 88%)",
                            maskImage:
                              "linear-gradient(to bottom, rgba(0,0,0,1) 38%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0) 88%)",
                          }}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
          <IntegracoesOficiais className="mt-6" />
          <section id="servicos" className="py-14 md:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-normal">
                Tudo o que sua operação precisa.
                <br />
              <span className="text-neutral-300">Em um só lugar.</span>
              </h2>
            <p className="mt-3 md:mt-4 text-neutral-300 max-w-3xl mx-auto text-sm md:text-base">
                O VBSolution conecta vendas, operações, comunicação e inteligência em módulos integrados, previsíveis e escaláveis.
              </p>
              <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {modules.map((module) => (
                  <div
                    key={module.title}
                  className="group rounded-xl border border-blue-500/40 bg-[#0b1b3b] p-4 md:p-5 shadow-xl hover:shadow-2xl transition-all duration-300 shadow-blue-500/10 hover:-translate-y-1"
                  >
                  <div className="mb-3 md:mb-4 rounded-lg border border-blue-500/40 overflow-hidden bg-[#0b1b3b]">
                      <img
                        src={module.image}
                        alt={module.title}
                        className="w-full h-auto max-h-36 md:max-h-44 object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  <h3 className="text-sm md:text-base font-medium text-neutral-100">{module.title}</h3>
                  <p className="mt-1 text-xs md:text-sm text-neutral-200">{module.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="relative py-8 md:py-28">
            <div className="mx-auto max-w-5xl space-y-6 md:space-y-8 px-6">
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-normal tracking-tight leading-tight text-neutral-100">
                  Transforme conversas em vendas com Inteligência Artificial
                </h2>
              </div>

              <div className="relative rounded-3xl p-3 md:-mx-6 max-w-4xl mx-auto ring-1 ring-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl shadow-blue-500/10">
                <VideoIASection openMedia={openMedia} />
              </div>

              <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                <div className="group space-y-3 p-4 rounded-xl ring-1 ring-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-[1.5px] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
                      <Zap className="size-4 text-neutral-100" />
                    </div>
                    <h3 className="text-sm font-medium text-neutral-100">Qualifica</h3>
                  </div>
                  <p className="text-sm text-neutral-400">Qualifica leads automaticamente.</p>
                </div>
                <div className="group space-y-3 p-4 rounded-xl ring-1 ring-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-[1.5px] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
                      <Cpu className="size-4 text-neutral-100" />
                    </div>
                    <h3 className="text-sm font-medium text-neutral-100">Agenda</h3>
                  </div>
                  <p className="text-sm text-neutral-400">Realiza agendamentos.</p>
                </div>
                <div className="group space-y-3 p-4 rounded-xl ring-1 ring-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-[1.5px] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
                      <Sparkles className="size-4 text-neutral-100" />
                    </div>
                    <h3 className="text-sm font-medium text-neutral-100">24/7</h3>
                  </div>
                  <p className="text-sm text-neutral-400">Responde clientes em tempo real 24/7.</p>
                </div>
                <div className="group space-y-3 p-4 rounded-xl ring-1 ring-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-[1.5px] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
                      <Lock className="size-4 text-neutral-100" />
                    </div>
                    <h3 className="text-sm font-medium text-neutral-100">Regras</h3>
                  </div>
                  <p className="text-sm text-neutral-400">Segue regras do seu negócio.</p>
                </div>
              </div>

            <div className="mx-auto flex justify-center gap-3">
              <a href={getWhatsAppUrl()} className="inline-block">
                <ShinyButton size="sm">
                  <span className="text-[11px] sm:text-base">Agendar Demonstração</span>
                </ShinyButton>
              </a>
              <a href="/planos" className="inline-block">
                <ShinyButton className="opacity-90 hover:opacity-100" variant="ghost" size="sm" speed="slow" animated={false}>
                  <span className="text-xs sm:text-base">Consultar Planos</span>
                </ShinyButton>
              </a>
            </div>
            </div>
          </section>
          
          
          <section className="py-6 md:py-14">
            <div className="mx-auto max-w-6xl space-y-6 px-6">
              <div className="relative z-10 grid items-start gap-4 md:grid-cols-2 md:gap-6">
                <h2 className="text-3xl md:text-4xl font-normal tracking-tight leading-tight text-neutral-100">Uma pipeline inteligente para vendas</h2>
                <p className="max-w-sm text-xs md:text-sm text-neutral-400">A pipeline de vendas do VBSolution transforma oportunidades em um processo claro, organizado, do primeiro contato ao fechamento.</p>
              </div>
              <div className="relative rounded-3xl p-3 md:-mx-6 max-w-4xl mx-auto ring-1 ring-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl shadow-blue-500/10">
                <VideoVendasSection openMedia={openMedia} />
              </div>
              <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-5 lg:grid-cols-4">
                <div className="group rounded-xl p-4 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
                  <div className="flex items-center gap-2">
                    <Zap className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    <h3 className="text-sm font-medium text-neutral-100">Funil visual estilo Kanban</h3>
                  </div>
                  <p className="text-neutral-400 text-sm mt-2">Organização clara das oportunidades para fluxo ágil.</p>
                </div>
                <div className="group rounded-xl p-4 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    <h3 className="text-sm font-medium text-neutral-100">Etapas personalizáveis</h3>
                  </div>
                  <p className="text-neutral-400 text-sm mt-2">Ajuste cada fase conforme o seu processo.</p>
                </div>
                <div className="group rounded-xl p-4 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
                  <div className="flex items-center gap-2">
                    <Cpu className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    <h3 className="text-sm font-medium text-neutral-100">Integração total com WhatsApp e IA</h3>
                  </div>
                  <p className="text-neutral-400 text-sm mt-2">Ações rápidas e automações conectadas.</p>
                </div>
                <div className="group rounded-xl p-4 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
                  <div className="flex items-center gap-2">
                    <Lock className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    <h3 className="text-sm font-medium text-neutral-100">Histórico completo por oportunidade</h3>
                  </div>
                  <p className="text-neutral-400 text-sm mt-2">Rastreamento preciso de interações e evolução.</p>
                </div>
              </div>
              <div className="flex mt-4 mx-auto justify-center gap-3">
                <a href={getWhatsAppUrl()} className="inline-block">
                  <ShinyButton size="sm">
                    <span className="text-[11px] sm:text-base">Agendar Demonstração</span>
                  </ShinyButton>
                </a>
                <a href="/planos" className="inline-block">
                  <ShinyButton className="opacity-90 hover:opacity-100" variant="ghost" size="sm" speed="slow" animated={false}>
                    <span className="text-xs sm:text-base">Consultar Planos</span>
                  </ShinyButton>
                </a>
              </div>
            </div>
          </section>
          <Features9 />
          <Dialog open={mediaOpen} onOpenChange={setMediaOpen}>
            <DialogContent className="p-0 bg-transparent border-none shadow-none max-w-5xl w-[92vw]">
              <div className="relative w-full aspect-[21/9] rounded-2xl ring-1 ring-white/10 overflow-hidden bg-black">
                {media?.type === "video" ? (
                  <video src={media?.src} controls autoPlay className="absolute inset-0 w-full h-full object-contain rounded-2xl" />
                ) : (
                  <img src={media?.src || ""} alt={media?.alt || ""} className="absolute inset-0 w-full h-full object-contain rounded-2xl" />
                )}
              </div>
            </DialogContent>
          </Dialog>
          <section className="pt-8 pb-4">
            <div className="mx-auto max-w-6xl px-6">
              <div className="grid lg:grid-cols-2 gap-2 md:gap-6 lg:gap-8 items-start">
                <div ref={blurbRef}>
                  <h3 className="text-xl md:text-2xl font-normal text-neutral-100 text-center mt-0 mb-0">
                    Benefícios do VBSolution CRM
                  </h3>
                </div>
                <div
                  className="overflow-hidden max-w-xl ml-auto"
                  style={{ height: blurbHeight ? blurbHeight : undefined }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <TestimonialsColumn testimonials={testimonials} duration={14} />
                    <TestimonialsColumn
                      testimonials={[...testimonials.slice(2), ...testimonials.slice(0, 2)]}
                      duration={12}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <FeaturesSectionWithHoverEffects />
              </div>
            </div>
          </section>
          <section className="pt-6 pb-6">
            <div className="mx-auto max-w-6xl px-6 text-center">
              <CallToAction />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default SyntheticHero;
