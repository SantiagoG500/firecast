type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
};

type ParticleSettings = {
  particleColor: string,
  minSize: number,
  maxSize: number,
  minSpeedX: number,
  maxSpeedX: number,
  minSpeedY: number,
  maxSpeedY: number,
};

type ParticleSettingsProps = {
  settings: ParticleSettings,
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
}

export function ParticleSystem({ settings, ctx, canvas }: ParticleSettingsProps) {

  const particles: Particle[] = []
  const createParticle = (x: number, y: number): void =>  {
    const particle: Particle = {
      x,
      y,
      size:
        Math.random() * (settings.maxSize - settings.minSize) +
        settings.minSize,
      speedX:
        Math.random() * (settings.maxSpeedX - settings.minSpeedX) +
        settings.minSpeedX,
      speedY:
        Math.random() * (settings.maxSpeedY - settings.minSpeedY) +
        settings.minSpeedY,
      opacity: 1.0,
    };

    particles.push(particle);
  }

  const drawParticles =  () => {
    particles.forEach((particle, index) => {
      ctx.fillStyle = settings.particleColor;
      ctx.globalAlpha = particle.opacity;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.opacity -= 0.01;
      if (particle.opacity <= 0) {
        particles.splice(index, 1);
      }
    });
  }

  const animate =  () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createParticle(Math.random() * canvas.width, canvas.height - 20);
    drawParticles();
    requestAnimationFrame(animate);
  }

  return {
    animate
  }
}