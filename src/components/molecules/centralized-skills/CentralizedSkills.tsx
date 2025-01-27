import React, { forwardRef, useRef } from "react";

import { cn } from "../../../lib/utils";
import { AnimatedBeam } from "../../atoms/animated-beam/AnimatedBeam";
import Container from "../../container/Container";

import azure from '../../../assets/icon/skill/azure.svg'
import bootstrap from '../../../assets/icon/skill/bootstrap.svg'
import c from '../../../assets/icon/skill/c.svg'
import dotnet from '../../../assets/icon/skill/dotnet.svg'
import express from '../../../assets/icon/skill/express.svg'
import firebase from '../../../assets/icon/skill/firebase.svg'
import java from '../../../assets/icon/skill/java.svg'
import javascript from '../../../assets/icon/skill/javascript.svg'
import jquery from '../../../assets/icon/skill/jquery.svg'
import laravel from '../../../assets/icon/skill/laravel.svg'
import mongodb from '../../../assets/icon/skill/mongodb.svg'
import next from '../../../assets/icon/skill/next-js.svg'
import php from '../../../assets/icon/skill/php.svg'
import python from '../../../assets/icon/skill/python.svg'
import react from '../../../assets/icon/skill/react.svg'
import sql from '../../../assets/icon/skill/sql.svg'
import tailwind from '../../../assets/icon/skill/tailwind.svg'
import typescript from '../../../assets/icon/skill/typescript.svg'
import { BorderBeam } from "../../atoms/border-beam/BorderBeam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-8 md:size-16 items-center justify-center overflow-hidden",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function CentralizedSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  const div10Ref = useRef<HTMLDivElement>(null);
  const div11Ref = useRef<HTMLDivElement>(null);
  const div12Ref = useRef<HTMLDivElement>(null);
  const div13Ref = useRef<HTMLDivElement>(null);
  const div14Ref = useRef<HTMLDivElement>(null);
  const div15Ref = useRef<HTMLDivElement>(null);
  const div16Ref = useRef<HTMLDivElement>(null);
  const div17Ref = useRef<HTMLDivElement>(null);
  const div18Ref = useRef<HTMLDivElement>(null);
  const div19Ref = useRef<HTMLDivElement>(null);

  return (
    <Container>
      <div
        className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-background p-10"
        ref={containerRef}
      >
        <div className="flex size-full flex-col items-stretch justify-between gap-10">
          <div className="flex flex-row items-center justify-between">
            <div className="flex gap-10">
              <div className="flex flex-col gap-5">
                <Circle ref={div1Ref}>
                  <img src={react} className="h-full w-full" alt="" />
                </Circle>
                <Circle ref={div2Ref}>
                  <img src={typescript} className="h-full w-full" alt="" />
                </Circle>
              </div>
              <div className="flex flex-col gap-5">
                <Circle ref={div3Ref}>
                  <img src={javascript} className="h-full w-full" alt="" />
                </Circle>
                <Circle ref={div4Ref}>
                  <img src={express} className="h-full w-full" alt="" />
                </Circle>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="flex flex-col gap-5">
                <Circle ref={div11Ref}>
                  <img src={c} className="h-full w-full" alt="" />
                </Circle>
                <Circle ref={div12Ref}>
                  <img src={jquery} className="h-full w-full" alt="" />
                </Circle>
              </div>
              <div className="flex flex-col gap-5">
                <Circle ref={div13Ref}>
                  <img src={java} className="h-full w-full" alt="" />
                </Circle>
                <Circle ref={div14Ref}>
                  <img src={python} className="h-full w-full" alt="" />
                </Circle>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle className="md:ms-10" ref={div5Ref}>
              <img src={dotnet} className="h-full w-full" alt="" />
            </Circle>
            <div className="relative bg-background overflow-hidden flex justify-center items-center rounded-md py-2 px-4 md:px-16 md:py-5 font-extrabold text-lg md:text-3xl tracking-widest bg-zinc-900 z-10" ref={div10Ref}>
              Skills
              <BorderBeam borderWidth={2} size={70} duration={3} delay={9} />
            </div>
            <Circle className="md:me-10" ref={div15Ref}>
              <img src={laravel} className="h-full w-full" alt="" />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex gap-10">
              <div className="flex flex-col gap-5">
                <Circle ref={div6Ref}>
                  <img src={azure} className="h-full w-full" alt="" />
                </Circle>
                <Circle ref={div7Ref}>
                  <img src={bootstrap} className="h-full w-full" alt="" />
                </Circle>
              </div>
              <div className="flex flex-col gap-5">
                <Circle ref={div8Ref}>
                  <img src={firebase} className="h-full w-full" alt="" />
                </Circle>
                <Circle ref={div9Ref}>
                  <img src={php} className="h-full w-full" alt="" />
                </Circle>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="flex flex-col gap-5">
                <Circle ref={div16Ref}>
                  <img src={tailwind} className="h-full w-full" alt="" />
                </Circle>
                <Circle ref={div17Ref}>
                  <img src={mongodb} className="h-full w-full" alt="" />
                </Circle>
              </div>
              <div className="flex flex-col gap-5">
                <Circle ref={div18Ref}>
                  <img src={next} className="h-full w-full" alt="" />
                </Circle>
                <Circle ref={div19Ref}>
                  <img src={sql} className="h-full w-full" alt="" />
                </Circle>
              </div>
            </div>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div10Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div10Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div10Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div10Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div10Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div10Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div10Ref}
          curvature={75}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div8Ref}
          toRef={div10Ref}
          curvature={75}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div9Ref}
          toRef={div10Ref}
          curvature={75}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div11Ref}
          toRef={div10Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div12Ref}
          toRef={div10Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div13Ref}
          toRef={div10Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div14Ref}
          toRef={div10Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div15Ref}
          toRef={div10Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div16Ref}
          toRef={div10Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div17Ref}
          toRef={div10Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div18Ref}
          toRef={div10Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div19Ref}
          toRef={div10Ref}
          reverse
        />
      </div>
    </Container>
  );
}