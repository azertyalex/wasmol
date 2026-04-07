<template>
  <div style="background:#0c0c0a; min-height:100vh; font-family:'DM Sans',sans-serif; color:white; padding:48px 32px">
    <p style="font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#F59E0B;margin-bottom:40px">Logo Concepts — Wasmol</p>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:32px">

      <!-- Concept A: Horizontal lockup (icon left + wordmark right) -->
      <div>
        <p style="font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:16px">A — Horizontal lockup</p>
        <div style="background:#141412;border:1px solid rgba(255,255,255,.06);border-radius:16px;padding:40px;display:flex;flex-direction:column;gap:32px;align-items:flex-start">
          <!-- Large -->
          <div style="display:flex;align-items:center;gap:14px">
            <MoleMark :size="52" />
            <span style="font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:42px;letter-spacing:-.02em;text-transform:uppercase;line-height:1">Was<span style="color:#F59E0B">mol</span></span>
          </div>
          <!-- Medium -->
          <div style="display:flex;align-items:center;gap:10px">
            <MoleMark :size="36" />
            <span style="font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:28px;letter-spacing:-.02em;text-transform:uppercase;line-height:1">Was<span style="color:#F59E0B">mol</span></span>
          </div>
          <!-- Small (nav size) -->
          <div style="display:flex;align-items:center;gap:7px">
            <MoleMark :size="22" />
            <span style="font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:18px;letter-spacing:-.02em;text-transform:uppercase;line-height:1">Was<span style="color:#F59E0B">mol</span></span>
          </div>
        </div>
        <!-- On light -->
        <div style="background:#f5f5f3;border-radius:16px;padding:40px;display:flex;flex-direction:column;gap:32px;align-items:flex-start;margin-top:8px">
          <div style="display:flex;align-items:center;gap:14px">
            <MoleMark :size="52" dark />
            <span style="font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:42px;letter-spacing:-.02em;text-transform:uppercase;line-height:1;color:#0c0c0a">Was<span style="color:#D97706">mol</span></span>
          </div>
        </div>
      </div>

      <!-- Concept B: Stacked (icon top + wordmark below) -->
      <div>
        <p style="font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:16px">B — Stacked</p>
        <div style="background:#141412;border:1px solid rgba(255,255,255,.06);border-radius:16px;padding:40px;display:flex;flex-direction:column;gap:40px;align-items:center">
          <!-- Large -->
          <div style="display:flex;flex-direction:column;align-items:center;gap:10px">
            <MoleMark :size="64" />
            <span style="font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:32px;letter-spacing:.08em;text-transform:uppercase;line-height:1">Was<span style="color:#F59E0B">mol</span></span>
          </div>
          <!-- Medium -->
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <MoleMark :size="40" />
            <span style="font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:20px;letter-spacing:.08em;text-transform:uppercase;line-height:1">Was<span style="color:#F59E0B">mol</span></span>
          </div>
        </div>
      </div>

      <!-- Concept C: Wordmark only with mole integrated -->
      <div>
        <p style="font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:16px">C — Mark only</p>
        <div style="background:#141412;border:1px solid rgba(255,255,255,.06);border-radius:16px;padding:40px;display:flex;flex-direction:column;gap:32px;align-items:center">
          <MoleMark :size="96" />
          <MoleMark :size="64" />
          <MoleMark :size="40" />
          <div style="display:flex;gap:12px;align-items:center">
            <MoleMark :size="24" />
            <MoleMark :size="20" />
            <MoleMark :size="16" />
          </div>
          <p style="font-size:11px;color:rgba(255,255,255,.2);letter-spacing:.1em;text-transform:uppercase">Favicon / icon sizes</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import MoleMark from '~/components/ui/MoleMark.vue'
</script>
