import { useState, useEffect } from 'react'

import Button from '@components/ui/Button'
import Card from '@components/ui/Card'
import InfoCard from '@components/ui/InfoCard'

const HomePage = () => {
  const [count, setCount] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const fullText = 'Welcome to React + TypeScript + Vite'

  // 打字机效果
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  // 鼠标位置跟踪
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    // Add enhanced animation styles to document head
    const style = document.createElement('style')
    style.textContent = `
      /* 真实烟花效果 */
      @keyframes ignite {
        0% {
          transform: scale(0.5);
          opacity: 0;
          box-shadow: 0 0 5px #ffaa00;
        }
        50% {
          transform: scale(1.2);
          opacity: 1;
          box-shadow: 0 0 25px #ffaa00, 0 0 35px #ff6600;
        }
        100% {
          transform: scale(0.8);
          opacity: 0.8;
          box-shadow: 0 0 15px #ffaa00;
        }
      }

      @keyframes launch-realistic {
        0% {
          transform: translateY(0) scale(1);
          opacity: 1;
          box-shadow: 0 0 15px currentColor, 0 5px 15px rgba(255, 170, 0, 0.3);
        }
        15% {
          transform: translateY(-40px) scale(1.1);
          opacity: 0.95;
          box-shadow: 0 0 20px currentColor, 0 5px 20px rgba(255, 170, 0, 0.4);
        }
        35% {
          transform: translateY(-80px) scale(1.05);
          opacity: 0.9;
          box-shadow: 0 0 25px currentColor;
        }
        60% {
          transform: translateY(-120px) scale(1);
          opacity: 0.8;
        }
        85% {
          transform: translateY(-160px) scale(0.9);
          opacity: 0.6;
        }
        100% {
          transform: translateY(-200px) scale(0.7);
          opacity: 0.3;
          box-shadow: 0 0 35px currentColor;
        }
      }

      @keyframes explode-droplet {
        0% { 
          transform: translate3d(0, 0, 0) rotate(0deg) scale(0.5); 
          opacity: 1; 
          box-shadow: 0 0 40px currentColor, 0 0 80px currentColor; 
        }
        5% { 
          transform: translate3d(0, 0, 0) rotate(0deg) scale(1.5); 
          opacity: 1; 
          box-shadow: 0 0 50px currentColor, 0 0 100px currentColor; 
        }
        10% { 
          transform: translate3d(calc(var(--dx) * 0.1), calc(var(--dy) * 0.1), 0) rotate(calc(var(--rotation) * 0.2)) scale(1.2); 
          opacity: 0.95; 
          box-shadow: 0 0 30px currentColor; 
        }
        20% { 
          transform: translate3d(calc(var(--dx) * 0.3), calc(var(--dy) * 0.3), 0) rotate(calc(var(--rotation) * 0.6)) scale(1); 
          opacity: 0.9; 
          box-shadow: 0 0 20px currentColor; 
        }
        30% { 
          transform: translate3d(calc(var(--dx) * 0.5), calc(var(--dy) * 0.5), 0) rotate(calc(var(--rotation) * 1)) scale(0.9); 
          opacity: 0.8; 
          box-shadow: 0 0 15px currentColor; 
        }
        50% { 
          transform: translate3d(calc(var(--dx) * 0.7), calc(var(--dy) * 0.7 + 20px), 0) rotate(calc(var(--rotation) * 1.5)) scale(0.7); 
          opacity: 0.6; 
          box-shadow: 0 0 10px currentColor; 
        }
        70% { 
          transform: translate3d(calc(var(--dx) * 0.85), calc(var(--dy) * 0.85 + 60px), 0) rotate(calc(var(--rotation) * 2)) scale(0.5); 
          opacity: 0.4; 
          box-shadow: 0 0 5px currentColor; 
        }
        85% { 
          transform: translate3d(calc(var(--dx) * 0.95), calc(var(--dy) * 0.95 + 120px), 0) rotate(calc(var(--rotation) * 2.5)) scale(0.3); 
          opacity: 0.2; 
        }
        100% { 
          transform: translate3d(var(--dx), calc(var(--dy) + 200px), 0) rotate(calc(var(--rotation) * 3)) scale(0.1); 
          opacity: 0; 
        }
      }

      /* 3D卡片悬停效果 */
      .card-3d {
        transform-style: preserve-3d;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
      }

      .card-3d::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
        transform: translateX(-100%);
        transition: transform 0.6s;
        pointer-events: none;
      }

      .card-3d:hover::before {
        transform: translateX(100%);
      }

      .card-3d:hover {
        transform: perspective(1000px) rotateX(5deg) rotateY(5deg) translateY(-5px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      }

      /* 按钮波纹效果 */
      .ripple-button {
        position: relative;
        overflow: hidden;
        transform: translate3d(0, 0, 0);
      }

      .ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        background-color: rgba(255, 255, 255, 0.7);
      }

      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }

      /* 渐变文字效果 */
      .gradient-text {
        background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradient-shift 3s ease-in-out infinite;
      }

      @keyframes gradient-shift {
        0%, 100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }

      /* 浮动动画 */
      .floating {
        animation: floating 3s ease-in-out infinite;
      }

      @keyframes floating {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      /* 鼠标跟随光标 */
      .cursor-glow {
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(102, 126, 234, 0.4) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
      }

      /* 打字机光标 */
      .typewriter::after {
        content: '|';
        animation: blink 1s infinite;
      }

      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }

      /* 卡片进入动画 */
      .card-enter {
        animation: slideInUp 0.6s ease-out forwards;
        opacity: 0;
        transform: translateY(30px);
      }

      .card-enter:nth-child(1) { animation-delay: 0.1s; }
      .card-enter:nth-child(2) { animation-delay: 0.2s; }
      .card-enter:nth-child(3) { animation-delay: 0.3s; }
      .card-enter:nth-child(4) { animation-delay: 0.4s; }
      .card-enter:nth-child(5) { animation-delay: 0.5s; }
      .card-enter:nth-child(6) { animation-delay: 0.6s; }

      @keyframes slideInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // 按钮波纹效果
  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget
    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`
    circle.classList.add('ripple')

    const ripple = button.getElementsByClassName('ripple')[0]
    if (ripple) {
      ripple.remove()
    }

    button.appendChild(circle)
  }

  return (
    <>
      {/* 鼠标跟随光标 */}
      <div 
        className="cursor-glow"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      />
      
      <div className="space-y-8">
        <div className="text-center floating">
          <h1 className="text-4xl font-bold gradient-text mb-4 typewriter">
            {displayedText}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A modern frontend development setup with Tailwind CSS and ESLint
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="card-3d card-enter">
            <h3 className="text-lg font-semibold mb-2">⚡ Vite</h3>
            <p className="text-gray-600">
              Lightning fast build tool with hot module replacement
            </p>
          </Card>

          <Card className="card-3d card-enter">
            <h3 className="text-lg font-semibold mb-2">⚛️ React 18</h3>
            <p className="text-gray-600">
              Latest React with concurrent features and improved performance
            </p>
          </Card>

          <Card className="card-3d card-enter">
            <h3 className="text-lg font-semibold mb-2">🔷 TypeScript</h3>
            <p className="text-gray-600">
              Type-safe development with excellent IDE support
            </p>
          </Card>

          <Card className="card-3d card-enter" onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const startX = e.clientX
            const startY = e.clientY
            const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff8000', '#8000ff', '#ff0080', '#80ff00', '#0080ff', '#ff4000']
            
            // 创建单个烟花
            const createFirework = (delay: number = 0) => {
              setTimeout(() => {
                // 第一阶段：点燃效果
                const igniteParticle = document.createElement('div')
                igniteParticle.className = 'firework-ignite'
                igniteParticle.style.cssText = `
                  position: fixed;
                  left: ${startX - 3}px;
                  top: ${startY - 3}px;
                  width: 6px;
                  height: 6px;
                  background: #ffaa00;
                  border-radius: 50%;
                  box-shadow: 0 0 20px #ffaa00;
                  z-index: 1000;
                  pointer-events: none;
                  animation: ignite 0.3s ease-out forwards;
                `
                document.body.appendChild(igniteParticle)

                  // 第二阶段：升空
                setTimeout(() => {
                  const launchParticle = document.createElement('div')
                  const color = colors[Math.floor(Math.random() * colors.length)]
                  
                  launchParticle.className = 'firework-launch'
                  launchParticle.style.cssText = `
                    position: fixed;
                    left: ${startX - 2}px;
                    top: ${startY - 2}px;
                    width: 4px;
                    height: 8px;
                    background: linear-gradient(to top, ${color}, #ffaa00);
                    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
                    box-shadow: 0 0 15px ${color};
                    z-index: 1000;
                    pointer-events: none;
                    animation: launch-realistic 1s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
                  `
                  document.body.appendChild(launchParticle)

                  // 第三阶段：爆炸
                  setTimeout(() => {
                    const explosionParticles: HTMLDivElement[] = []
                    const numParticles = 28 + Math.floor(Math.random() * 16)
                    const explosionY = startY - 200
                    
                    for (let i = 0; i < numParticles; i++) {
                      const particle = document.createElement('div')
                      const angle = (i / numParticles) * 2 * Math.PI + (Math.random() - 0.5) * 0.3
                      const velocity = 90 + Math.random() * 70
                      const particleColor = colors[Math.floor(Math.random() * colors.length)]
                      
                      particle.className = 'firework-explode'
                      // 计算实际的x和y位移
                      const dx = Math.cos(angle) * velocity
                      const dy = Math.sin(angle) * velocity
                      
                      particle.style.cssText = `
                        position: fixed;
                        left: ${startX - 3}px;
                        top: ${explosionY - 3}px;
                        width: 6px;
                        height: 6px;
                        background: ${particleColor};
                        border-radius: 50%;
                        box-shadow: 
                          0 0 20px ${particleColor}, 
                          0 0 40px ${particleColor};
                        z-index: 1000;
                        pointer-events: none;
                        animation: explode-droplet 2s ease-out forwards;
                        will-change: transform, opacity;
                        --dx: ${dx}px;
                        --dy: ${dy}px;
                        --rotation: ${angle * 57.3}deg;
                      `
                      
                      document.body.appendChild(particle)
                      explosionParticles.push(particle)
                    }

                    // 清理爆炸粒子
                    setTimeout(() => {
                      explosionParticles.forEach(particle => {
                        if (particle.parentNode) {
                          particle.parentNode.removeChild(particle)
                        }
                      })
                    }, 2000)

                    // 清理升空粒子
                    if (launchParticle.parentNode) {
                      launchParticle.parentNode.removeChild(launchParticle)
                    }
                  }, 1000)

                  // 清理点燃粒子
                  if (igniteParticle.parentNode) {
                    igniteParticle.parentNode.removeChild(igniteParticle)
                  }
                }, 300)
              }, delay)
            }

            // 创建多个烟花，稍有延迟
            createFirework(0)
            if (Math.random() > 0.6) createFirework(200)
            if (Math.random() > 0.8) createFirework(400)
          }}>
          <h3 className="text-lg font-semibold mb-2">🎨 Tailwind CSS</h3>
          <p className="text-gray-600">
            Utility-first CSS framework for rapid UI development
          </p>
          </Card>

          <Card className="card-3d card-enter">
            <h3 className="text-lg font-semibold mb-2">📏 ESLint</h3>
            <p className="text-gray-600">
              Code linting and formatting with Prettier integration
            </p>
          </Card>

          <Card className="card-3d card-enter">
            <h3 className="text-lg font-semibold mb-2">🧪 Vitest</h3>
            <p className="text-gray-600">
              Fast unit testing with Jest-compatible API
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Card className="inline-block card-3d">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Interactive Counter</h2>
            <div className="space-y-4">
              <p className="text-lg">Count: <span className="gradient-text font-bold">{count}</span></p>
              <div className="space-x-2">
                <Button 
                  className="ripple-button"
                  onClick={(e) => {
                    createRipple(e)
                    setCount(count + 1)
                  }}
                >
                  Increment
                </Button>
                <Button 
                  variant="secondary" 
                  className="ripple-button"
                  onClick={(e) => {
                    createRipple(e)
                    setCount(count - 1)
                  }}
                >
                  Decrement
                </Button>
                <Button 
                  variant="outline" 
                  className="ripple-button"
                  onClick={(e) => {
                    createRipple(e)
                    setCount(0)
                  }}
                >
                  Reset
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* InfoCard 组件展示区域 */}
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-text mb-8">Styled Components InfoCard</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
