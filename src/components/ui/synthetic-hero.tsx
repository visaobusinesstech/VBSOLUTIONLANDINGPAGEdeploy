"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, Check } from "lucide-react";
import { motion } from "motion/react";
import { useScroll, useTransform, motion as fmotion, MotionValue as FMotionValue } from "framer-motion";
import vendasImg from "@/fotos/Prints do VBSolution/vendas.png";
import atividadesImg from "@/fotos/Prints do VBSolution/Atividades.jpeg";
import dashboardImg from "@/fotos/Prints do VBSolution/dashboard.jpeg";
import iaImg from "@/fotos/Prints do VBSolution/IAfunc.jpeg";
import emailImg from "@/fotos/Prints do VBSolution/e-mail.jpeg";
import whatsappPrintImg from "@/fotos/Prints do VBSolution/whatsapp.jpeg";
import iaVideoSrc from "@/fotos/IA.video.mp4";
import IntegracoesOficiais from "@/components/IntegracoesOficiais";
import logooImg from "@/fotos/logoo.png";

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
          ...new Array(2).fill(0).map((_, index) => (
            <div key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-5 rounded-2xl border border-gray-200 shadow-sm max-w-[16rem] w-full bg-white mx-auto sm:mx-0 text-center sm:text-left"
                  key={i}
                >
                  <div className="text-neutral-800 text-sm">{text}</div>
                  <div className="flex items-center gap-2 mt-5 justify-center sm:justify-start">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="flex flex-col items-center sm:items-start">
                      <div className="font-medium tracking-tight leading-5 text-sm">
                        {name}
                      </div>
                      <div className="leading-5 opacity-60 tracking-tight text-xs">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )),
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

const SyntheticHero = ({
  title = "O seu último e melhor CRM",
  description = "O VBsolution é um CRM focado em vendas, com inteligência artificial para centralizar processos, equipes e resultados em um único sistema.",
  badgeText = "Para agencias de Marketing & SaaS",
  badgeLabel = "Para agencias de Marketing & SaaS",
  ctaButtons = [
    { text: "Quero vender mais", href: "https://api.whatsapp.com/send/?phone=5541997772066&text=Ol%C3%A1%20tudo%20bem%3F%20Tenho%20interesse%20em%20conhcer%20o%20VBSolution%20CRM%20solicito%20uma%20demonstra%C3%A7%C3%A3o%21&type=phone_number&app_absent=0", primary: true },
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
  const shaderUniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector3(1, 1, 1) },
      u_channel0: { value: null },
    }),
    []
  );

  useEffect(() => {
    const update = () => {
      setBlurbHeight(blurbRef.current?.offsetHeight ?? 0);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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
      className="relative min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden"
    >
      <div className="fixed inset-0">
        <Canvas gl={{ antialias: true }} className="w-full h-full blur-[2px]">
          <ShaderPlane
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={shaderUniforms}
          />
        </Canvas>
      </div>
          <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-24 text-center">
          <img
            src={logooImg}
            alt="Pipeline de Vendas"
            className="mx-auto mb-2 w-40 md:w-56 h-auto"
          />
          <h1
            ref={headingRef}
            className="text-4xl md:text-6xl font-bold leading-tight text-black tracking-tight"
          >
            {title && title.includes("CRM") ? (
              <>
                {title.split("CRM")[0]}
                <span className="text-black">CRM</span>
                {title.split("CRM")[1]}
              </>
            ) : (
              title
            )}
          </h1>
          <p
            ref={paragraphRef}
            className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
          >
            {description}
          </p>
          <div ref={ctaRef} className="mt-8 flex flex-wrap gap-4 justify-center">
            {ctaButtons?.map((btn, i) =>
              btn.primary ? (
                <Button key={i} asChild className="bg-[#3b82f6] text-white hover:bg-[#3b82f6]/90">
                  <a href={btn.href || "#"}>
                    <Crown className="w-4 h-4 text-yellow-500" />
                    {btn.text}
                  </a>
                </Button>
              ) : (
                <Button key={i} variant="outline" asChild className="border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6]/10">
                  <a href={btn.href || "#"}>{btn.text}</a>
                </Button>
              )
            )}
          </div>
          <div className="mt-8">
            <ContainerScroll titleComponent={null}>
              <img
                src={vendasImg}
                alt="Pipeline de Vendas"
                className="block w-full h-auto border-4 border-gray-300 rounded-2xl"
              />
            </ContainerScroll>
          </div>
          <IntegracoesOficiais className="mt-20" />
          <section id="servicos" className="py-20">
            <div className="mx-auto max-w-6xl px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Tudo o que sua operação precisa.
                <br />
                <span className="text-neutral-500">Em um só lugar.</span>
              </h2>
              <p className="mt-4 text-neutral-600 max-w-3xl mx-auto">
                O VBSolution conecta vendas, operações, comunicação e inteligência em módulos integrados, previsíveis e escaláveis.
              </p>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((module) => (
                  <div
                    key={module.title}
                    className="group rounded-xl border border-blue-500/40 bg-white p-5 shadow-xl hover:shadow-2xl transition-all duration-300 shadow-blue-500/10 hover:-translate-y-1"
                  >
                    <div className="mb-4 rounded-lg border border-blue-500/40 overflow-hidden">
                      <img
                        src={module.image}
                        alt={module.title}
                        className="w-full h-auto max-h-44 object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-base font-medium text-neutral-900">{module.title}</h3>
                    <p className="mt-1 text-sm text-neutral-600">{module.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-20">
            <div className="mx-auto max-w-6xl px-6">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-semibold">
                  Transforme conversas em vendas com Inteligência Artificial
                </h2>
                <p className="mt-4 text-neutral-600 max-w-3xl mx-auto">
                  Automatize atendimentos, qualifique leads e aumente conversões com uma IA treinada para o seu negócio.
                </p>
              </div>

              <div className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
                <video
                  src={iaVideoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="rounded-2xl border border-blue-500/50 shadow-2xl shadow-blue-500/20 w-full h-auto max-h-[520px] md:max-h-[620px] object-contain bg-transparent transition-all duration-300 hover:-translate-y-1"
                />
                <div className="flex flex-col justify-between">
                  {[
                    "Qualifica leads automaticamente",
                    "Realiza agendamentos",
                    "Responde clientes em tempo real 24/7",
                    "Segue regras do seu negócio",
                    "Aumenta a taxa de conversão",
                    "Reduz esforço operacional",
                    "Totalmente integrado ao seu pipeline",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 py-2 animate-fade-in"
                    >
                      <div className="w-6 h-6 bg-[#3b82f6] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-neutral-800">{point}</p>
                    </div>
                  ))}
                  <div className="mt-8 rounded-2xl border border-blue-500/50 bg-gradient-to-r from-blue-50 to-white p-6 text-neutral-900 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <p className="text-lg md:text-xl font-medium">
                      Seu time vende quando está online. <br className="hidden sm:block" />
                      Seu Agente de IA vende o tempo todo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          
          <section className="py-20">
            <div className="mx-auto max-w-6xl px-6">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-semibold">
                  Uma pipeline inteligente para vendas
                </h2>
                <p className="mt-4 text-neutral-600 max-w-3xl mx-auto">
                  A pipeline de vendas do VBSolution transforma oportunidades em um processo claro, organizado, do primeiro contato ao fechamento.
                </p>
              </div>
              <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-1 lg:order-2">
                  <div className="rounded-2xl border border-blue-500/40 shadow-xl shadow-blue-500/10 overflow-hidden bg-white">
                    <img
                      src={vendasImg}
                      alt="Pipeline de Vendas"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                <div className="order-2 lg:order-1">
                  <div className="space-y-3">
                    {[
                      "Funil visual estilo Kanban",
                      "Etapas personalizáveis",
                      "Integração total com WhatsApp e IA",
                      "Histórico completo por oportunidade",
                    ].map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#3b82f6] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-neutral-800">{point}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 rounded-2xl border border-blue-500/50 bg-gradient-to-r from-blue-50 to-white p-6 text-neutral-900 shadow-xl">
                    <span>Quando o processo é claro,</span>
                    <br />
                    <span>o fechamento acontece.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-16 pb-8">
            <div className="mx-auto max-w-6xl px-6">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div ref={blurbRef}>
                  <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 text-left">
                    <span>Crescimento previsível</span>
                    <span className="sm:block">{" "}começa com tecnologia sólida</span>
                    <span className="sm:block">{" "}e suporte que entende sua operação.</span>
                  </h2>
                  <p className="mt-4 text-neutral-700 max-w-xl text-left">
                    No VBSolution, você não recebe apenas um CRM. Você recebe um time que
                    acompanha sua operação, apoia sua implementação e garante que cada
                    métrica avance.
                  </p>
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
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default SyntheticHero;
