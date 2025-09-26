import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Animated Container
interface AnimatedContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'rotateIn';
  delay?: number;
  duration?: number;
}

export const AnimatedContainer = forwardRef<HTMLDivElement, AnimatedContainerProps>(
  ({ className, animation = 'fadeInUp', delay = 0, duration = 800, children, ...props }, ref) => {
    const { ref: scrollRef, isVisible } = useScrollAnimation();

    return (
      <div
        ref={scrollRef}
        className={cn(
          'transition-all ease-out',
          !isVisible && 'opacity-0 translate-y-8',
          isVisible && 'opacity-100 translate-y-0',
          className
        )}
        style={{
          transitionDelay: `${delay}ms`,
          transitionDuration: `${duration}ms`,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AnimatedContainer.displayName = 'AnimatedContainer';

// Animated Card with Hover Effects
interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: 'lift' | 'scale' | 'glow' | 'tilt' | 'none';
  glowColor?: string;
}

export const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, hoverEffect = 'lift', glowColor = 'blue', children, ...props }, ref) => {
    const hoverClasses = {
      lift: 'hover:translate-y-[-8px] hover:shadow-2xl',
      scale: 'hover:scale-105',
      glow: `hover:shadow-2xl hover:shadow-${glowColor}-500/25`,
      tilt: 'hover:rotate-1 hover:scale-105',
      none: ''
    };

    return (
      <div
        ref={ref}
        className={cn(
          'transition-all duration-300 ease-out cursor-pointer',
          'bg-white/80 backdrop-blur-sm border border-gray-200/50',
          'rounded-xl overflow-hidden',
          hoverEffect !== 'none' && hoverClasses[hoverEffect],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AnimatedCard.displayName = 'AnimatedCard';

// Animated Button with Multiple Effects
interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gradient' | 'shimmer' | 'glow' | 'bounce' | 'default';
  size?: 'sm' | 'md' | 'lg';
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    const variantClasses = {
      default: 'bg-blue-600 hover:bg-blue-700 text-white',
      gradient: 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 hover:bg-pos-100 text-white',
      shimmer: 'bg-blue-600 text-white relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
      glow: 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/50',
      bounce: 'bg-blue-600 hover:bg-blue-700 text-white hover:animate-bounce'
    };

    return (
      <button
        ref={ref}
        className={cn(
          'rounded-lg font-semibold transition-all duration-300 ease-out',
          'transform hover:scale-105 hover:translate-y-[-2px]',
          'focus:outline-none focus:ring-4 focus:ring-blue-500/50',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';

// Floating Elements
interface FloatingElementProps extends React.HTMLAttributes<HTMLDivElement> {
  floatIntensity?: 'subtle' | 'medium' | 'strong';
  delay?: number;
}

export const FloatingElement = forwardRef<HTMLDivElement, FloatingElementProps>(
  ({ className, floatIntensity = 'medium', delay = 0, children, ...props }, ref) => {
    const intensityClasses = {
      subtle: 'animate-float',
      medium: 'animate-float',
      strong: 'animate-bounce'
    };

    return (
      <div
        ref={ref}
        className={cn(
          intensityClasses[floatIntensity],
          className
        )}
        style={{ animationDelay: `${delay}ms` }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FloatingElement.displayName = 'FloatingElement';

// Gradient Text
interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  gradient?: 'blue-purple' | 'purple-pink' | 'green-blue' | 'orange-red';
  animated?: boolean;
}

export const GradientText = forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, gradient = 'blue-purple', animated = false, children, ...props }, ref) => {
    const gradientClasses = {
      'blue-purple': 'from-blue-600 via-purple-600 to-blue-600',
      'purple-pink': 'from-purple-600 via-pink-600 to-purple-600',
      'green-blue': 'from-green-600 via-blue-600 to-green-600',
      'orange-red': 'from-orange-600 via-red-600 to-orange-600'
    };

    return (
      <span
        ref={ref}
        className={cn(
          'bg-gradient-to-r bg-clip-text text-transparent font-bold',
          gradientClasses[gradient],
          animated && 'bg-size-200 animate-gradient',
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

GradientText.displayName = 'GradientText';

// Staggered Animation Container
interface StaggeredContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  staggerDelay?: number;
}

export const StaggeredContainer = forwardRef<HTMLDivElement, StaggeredContainerProps>(
  ({ className, staggerDelay = 100, children, ...props }, ref) => {
    const { ref: scrollRef, isVisible } = useScrollAnimation();

    return (
      <div ref={scrollRef} className={cn(className)} {...props}>
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={cn(
              'transition-all duration-700 ease-out',
              !isVisible && 'opacity-0 translate-y-8',
              isVisible && 'opacity-100 translate-y-0'
            )}
            style={{
              transitionDelay: isVisible ? `${index * staggerDelay}ms` : '0ms',
            }}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }
);

StaggeredContainer.displayName = 'StaggeredContainer';

// Parallax Container
interface ParallaxContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number;
  direction?: 'up' | 'down';
}

export const ParallaxContainer = forwardRef<HTMLDivElement, ParallaxContainerProps>(
  ({ className, speed = 0.5, direction = 'up', children, ...props }, ref) => {
    const [offset, setOffset] = React.useState(0);

    React.useEffect(() => {
      const handleScroll = () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * speed;
        setOffset(direction === 'up' ? -parallax : parallax);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [speed, direction]);

    return (
      <div
        ref={ref}
        className={cn('will-change-transform', className)}
        style={{
          transform: `translateY(${offset}px)`,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ParallaxContainer.displayName = 'ParallaxContainer';

// Morphing Background
export const MorphingBackground: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-gradient bg-size-400" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float animate-delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-float animate-delay-600" />
      </div>
    </div>
  );
};
