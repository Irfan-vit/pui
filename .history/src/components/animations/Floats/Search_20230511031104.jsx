const style = {
  height: '1.5rem',
  display: 'inline-block',
  cursor: 'pointer',
}

const interactivity = {
  mode: 'cursor',
  actions: [
    {
      position: { x: [0, 1], y: [0, 1] },
      type: 'loop',
      frames: [0, 20],
    },
    {
      position: { x: -1, y: -1 },
      type: 'stop',
      frames: [0],
    },
  ],
}

<a href="#">
<Lottie
  animationData={search}
  style={style}
  loop={true}
  interactivity={interactivity}
  initialSegment={[0, 20]}
/>
</a>