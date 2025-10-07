"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Legend } from "recharts";
import { motion } from "framer-motion";
import { FileText, FlaskConical, LineChart, Mail, Linkedin, Download } from "lucide-react";

import {
  meta, buscoData, gffCompareData, headlineStats,
  evidencePieData, highlight, novelTranscriptSummary,
} from "@/content/site";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-300 via-sky-100 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            {meta.titleLine1}
            <span className="block text-sky-700">{meta.titleLine2}</span>
          </motion.h1>
          <p className="mt-4 max-w-3xl text-slate-600">
            This is a reusable template for a project page. Edit everything in <code>src/content/site.ts</code>.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {meta.badges.map((b) => (<Badge key={b} variant="secondary">{b}</Badge>))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {meta.slidesUrl && (
              <a href={meta.slidesUrl} target="_blank" rel="noreferrer">
                <Button className="gap-2"><Download className="h-4 w-4" /> Download Slides</Button>
              </a>
            )}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2"><FileText className="h-4 w-4" /> Project Abstract</Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader><DialogTitle>Abstract</DialogTitle></DialogHeader>
                <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                  Replace this abstract in <code>src/content/site.ts</code> with your own overview.
                </p>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* At-a-glance */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <Card className="shadow-sm">
          <CardHeader><CardTitle>At a glance</CardTitle></CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {headlineStats.map((s) => (
                <div key={s.label} className="rounded-2xl border p-4 bg-white">
                  <p className="text-sm text-slate-500">{s.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">{s.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Methods & Data */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <Tabs defaultValue="methods" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="methods">Methods</TabsTrigger>
            <TabsTrigger value="datasets">Datasets</TabsTrigger>
            <TabsTrigger value="validation">Validation</TabsTrigger>
          </TabsList>
          <TabsContent value="methods" className="mt-4">
            <div className="grid md:grid-cols-3 gap-4">
              <Card><CardHeader className="pb-2"><CardTitle className="text-lg flex items-center gap-2"><FlaskConical className="h-4 w-4" /> Annotation</CardTitle></CardHeader><CardContent className="text-sm text-slate-600">Describe your annotation tools.</CardContent></Card>
              <Card><CardHeader className="pb-2"><CardTitle className="text-lg flex items-center gap-2"><LineChart className="h-4 w-4" /> Structure &amp; Homology</CardTitle></CardHeader><CardContent className="text-sm text-slate-600">Describe structure/homology evidence.</CardContent></Card>
              <Card><CardHeader className="pb-2"><CardTitle className="text-lg flex items-center gap-2"><LineChart className="h-4 w-4" /> ML Ranking</CardTitle></CardHeader><CardContent className="text-sm text-slate-600">Describe your model succinctly.</CardContent></Card>
            </div>
          </TabsContent>
          <TabsContent value="datasets" className="mt-4">
            <Card><CardContent className="pt-6 text-sm text-slate-700">
              Replace with your data sources and accessions.
            </CardContent></Card>
          </TabsContent>
          <TabsContent value="validation" className="mt-4">
            <Card><CardContent className="pt-6 text-sm text-slate-700">
              Replace with your validation strategy.
            </CardContent></Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Results */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader><CardTitle>BUSCO completeness</CardTitle></CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={buscoData}>
                  <XAxis dataKey="tool" /><YAxis domain={[90, 100]} tickFormatter={(v)=>`${v}%`} />
                  <Tooltip formatter={(v)=>`${v}%`} /><Bar dataKey="Complete" radius={[6,6,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardHeader><CardTitle>GFFCompare agreement</CardTitle></CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={gffCompareData}>
                  <XAxis dataKey="metric" />
                  <YAxis domain={[0.9, 1]} tickFormatter={(v)=>`${(v*100).toFixed(0)}%`} />
                  <Tooltip formatter={(v)=>`${(v*100).toFixed(1)}%`} /><Legend />
                  <Bar dataKey="BRAKER3" radius={[6,6,0,0]} />
                  <Bar dataKey="FunAnnotate" radius={[6,6,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardHeader><CardTitle>Proteomics check</CardTitle></CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart><Pie data={evidencePieData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} />
                  <Tooltip /><Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle>Highlight: {highlight.locusId}</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <ul className="list-disc pl-5 space-y-1">{highlight.bullets.map((b)=><li key={b}>{b}</li>)}</ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Novel Transcripts</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <ul className="list-disc pl-5 space-y-1">{novelTranscriptSummary.map((t)=><li key={t}>{t}</li>)}</ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <footer className="bg-slate-50 border-t">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Get in touch</h3>
            <p className="text-slate-600 text-sm mt-1">Edit contact info in <code>src/content/site.ts</code>.</p>
          </div>
          <div className="flex gap-3">
            {meta.email && <a href={`mailto:${meta.email}`}><Button variant="outline" className="gap-2"><Mail className="h-4 w-4"/> Email</Button></a>}
            {meta.linkedin && <a href={meta.linkedin} target="_blank" rel="noreferrer"><Button variant="outline" className="gap-2"><Linkedin className="h-4 w-4"/> LinkedIn</Button></a>}
          </div>
        </div>
      </footer>
    </div>
  );
}
