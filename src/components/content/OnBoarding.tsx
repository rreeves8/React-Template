import { SwapScreenADT } from "../content-stack/NavigationStack";

export default function OnBoarding({ swapScreen }: { swapScreen: SwapScreenADT }) {
    return (
        <div>
            OnBoarding
            <button onClick={() => swapScreen("Registration")}>Switch to reg</button>
        </div>
    );
}
