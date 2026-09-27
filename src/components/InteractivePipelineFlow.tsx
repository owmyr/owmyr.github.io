'use client';

import React, { useState } from 'react';
import { AiProject, PipelineNode } from '../types/portfolio';

interface InteractivePipelineFlowProps {
  project: AiProject;
}

/**
 * Interactive architecture pipeline flow component.
 * Replaces static ASCII text with glassmorphic, interactable nodes, animated SVG connectors,
 * a dynamic Node Inspector Box (Protocol, Failure Modes, Latency SLA), and failover simulation.
 *
 * @param {InteractivePipelineFlowProps} props - The project containing pipeline nodes and optional failover branch.
 * @returns {React.ReactElement} The rendered interactive architecture pipeline flow.
 */
export const InteractivePipelineFlow: React.FC<InteractivePipelineFlowProps> = ({ project }) => {
  const [selectedNodeIndex, setSelectedNodeIndex] = useState<number>(0);
  const [isFailoverActive, setIsFailoverActive] = useState<boolean>(false);

  const activeNode: PipelineNode = project.pipelineNodes[selectedNodeIndex] || project.pipelineNodes[0];
  const failover = project.failoverBranch;

  // Active inspector data based on whether failover simulation is active
  const inspector = isFailoverActive && failover ? failover.inspector : activeNode.inspector;
  const inspectorTitle = isFailoverActive && failover ? `Failover Branch: ${failover.label}` : activeNode.label;
  const inspectorStatus = isFailoverActive && failover ? 'fallback' : activeNode.status;

  return (
    <div className="my-5 rounded-2xl border border-white/[0.08] bg-[#070709] p-4 sm:p-5 backdrop-blur-md">
      {/* Header bar: Section title + Failover simulator toggle */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
            Interactive Architecture Pipeline
          </span>
          <span className="text-[10px] font-mono text-zinc-500 hidden sm:inline">
            (Click or hover nodes to inspect protocols &amp; SLAs)
          </span>
        </div>

        {failover && (
          <button
            type="button"
            onClick={() => setIsFailoverActive(!isFailoverActive)}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 border ${
              isFailoverActive
                ? 'bg-amber-950/60 border-amber-500/80 text-amber-300 shadow-[0_0_16px_rgba(245,158,11,0.25)]'
                : 'bg-white/[0.03] border-white/[0.12] text-zinc-300 hover:text-white hover:border-amber-400/50'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isFailoverActive ? 'bg-amber-400 animate-ping' : 'bg-amber-500/70'
              }`}
            />
            <span>
              {isFailoverActive ? 'Simulating Failover (Active)' : 'Simulate Failover / View Fallback'}
            </span>
          </button>
        )}
      </div>

      {/* Desktop Pipeline Layout: Horizontal nodes with animated connectors */}
      <div className="hidden md:flex items-center justify-between gap-2 overflow-x-auto pb-2">
        {project.pipelineNodes.map((node, index) => {
          const isSelected = !isFailoverActive && selectedNodeIndex === index;
          return (
            <React.Fragment key={node.id}>
              {/* Pipeline Node Card */}
              <button
                type="button"
                onClick={() => {
                  setSelectedNodeIndex(index);
                  setIsFailoverActive(false);
                }}
                onMouseEnter={() => {
                  if (!isFailoverActive) setSelectedNodeIndex(index);
                }}
                className={`flex-1 min-w-[170px] text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'border-cyan-400/70 bg-cyan-950/20 shadow-[0_0_18px_rgba(34,211,238,0.15)] ring-1 ring-cyan-400/40'
                    : 'border-white/[0.08] bg-zinc-900/60 hover:border-white/[0.22] hover:bg-zinc-800/50'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-[10px] font-mono text-zinc-400">
                    STAGE 0{index + 1}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      node.status === 'active'
                        ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]'
                        : node.status === 'routing'
                        ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]'
                        : 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]'
                    }`}
                  />
                </div>
                <div className="text-xs font-sans font-medium text-white line-clamp-1 mb-1">
                  {node.label}
                </div>
                <div className="text-[11px] font-mono text-zinc-400 line-clamp-1">
                  {node.inspector.protocol}
                </div>
              </button>

              {/* Connecting Connector Arrow between stages */}
              {index < project.pipelineNodes.length - 1 && (
                <div className="flex items-center justify-center flex-shrink-0 text-zinc-500 px-0.5">
                  <svg className="w-5 h-5 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                      strokeDasharray="4 2"
                      d="M5 12h14m-4-4l4 4-4 4"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile Pipeline Layout: Vertical Stepper on < 768px */}
      <div className="md:hidden space-y-2 relative pl-4 border-l border-white/[0.12]">
        {project.pipelineNodes.map((node, index) => {
          const isSelected = !isFailoverActive && selectedNodeIndex === index;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => {
                setSelectedNodeIndex(index);
                setIsFailoverActive(false);
              }}
              className={`w-full text-left p-3 rounded-xl border transition-all duration-200 ${
                isSelected
                  ? 'border-cyan-400/70 bg-cyan-950/20 shadow-[0_0_14px_rgba(34,211,238,0.15)] ring-1 ring-cyan-400/40'
                  : 'border-white/[0.08] bg-zinc-900/60'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="text-[10px] font-mono text-zinc-400">
                  STAGE 0{index + 1}
                </span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    node.status === 'active'
                      ? 'bg-emerald-400'
                      : node.status === 'routing'
                      ? 'bg-cyan-400'
                      : 'bg-amber-400'
                  }`}
                />
              </div>
              <div className="text-xs font-sans font-medium text-white">{node.label}</div>
              <div className="text-[10px] font-mono text-zinc-400 mt-0.5">
                {node.inspector.protocol}
              </div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Node Inspector Box */}
      <div
        className={`mt-4 p-4 rounded-xl border transition-all duration-200 ${
          isFailoverActive
            ? 'border-amber-500/40 bg-amber-950/15'
            : 'border-white/[0.08] bg-[#0c0c10]/80'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                inspectorStatus === 'active'
                  ? 'bg-emerald-400'
                  : inspectorStatus === 'routing'
                  ? 'bg-cyan-400'
                  : 'bg-amber-400 animate-pulse'
              }`}
            />
            <span className="text-xs font-mono font-medium text-white">
              Inspector: {inspectorTitle}
            </span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
            {isFailoverActive ? 'Secondary Circuit' : 'Primary Path Execution'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          {/* 1. Protocol / Data Shape */}
          <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.05]">
            <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
              Input / Protocol
            </div>
            <div className="font-mono text-zinc-200 text-[11px] leading-relaxed break-words">
              {inspector.protocol}
            </div>
          </div>

          {/* 2. Failure Mode & Mitigation */}
          <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.05]">
            <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400 mb-1">
              Failure Mode &amp; Recovery
            </div>
            <div className="font-sans text-zinc-300 text-xs leading-relaxed">
              {inspector.failureMode}
            </div>
          </div>

          {/* 3. Latency SLA & Execution Guarantee */}
          <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.05]">
            <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 mb-1">
              Latency SLA / Guarantees
            </div>
            <div className="font-mono text-zinc-300 text-[11px] leading-relaxed">
              {inspector.latencySla}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
