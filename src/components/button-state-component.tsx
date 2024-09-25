import { useContext, useRef, PointerEvent } from "react";
import { routerContext } from "./context/router-context";
import { usePress } from "react-aria";

export const ButtonStateComponent = () => {
    const router = useContext(routerContext);
    const ref = useRef<HTMLDivElement>(null);

    const onPress = () => {
        router.goToAnchorRoute();
    };

    const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
        
        if (e.pointerType === 'touch') {

            document.addEventListener('click', (capturedEvent) => {

                if (e.timeStamp === capturedEvent.timeStamp) {
                    capturedEvent.stopPropagation();
                    capturedEvent.preventDefault();
                }
            }, {once: true, capture: true});
        }

        pressProps.onPointerUp?.(e);
    };

    const { pressProps } = usePress({ onPress,  shouldCancelOnPointerExit: false});

    return <div {...pressProps} ref={ref} onPointerUp={onPointerUp}>Click me</div>;
};