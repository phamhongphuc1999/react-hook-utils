import { useMousePosition } from 'lib/use-mouse-position';
import { BaseTest } from './base-test';
import { useScrollPosition } from 'lib/use-scroll-position';

export function ScrollTest() {
  const { position } = useMousePosition();
  const { position: yPosition, direction } = useScrollPosition();

  return (
    <BaseTest title="Scroll test">
      <p>{`Mouse position: (${position.x}, ${position.y})`}</p>
      <p>{`Scroll position: ${yPosition}, direction: ${direction}`}</p>
    </BaseTest>
  );
}
