import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { RegisterButton } from "../components/RegisterButton";
import { eventConfig } from "../config/event";

describe("RegisterButton", () => {
  it("shows no registration link while registration is closed", () => {
    eventConfig.registrationOpen = false;
    const html = renderToString(<RegisterButton size="large" />);
    expect(html).not.toContain("href=");
    expect(html).toContain("Registration Opening Soon");
  });

  it("links to the configured registration URL once registration opens", () => {
    eventConfig.registrationOpen = true;
    const html = renderToString(<RegisterButton size="large" />);
    expect(html).toContain(`href="${eventConfig.registrationUrl}"`);
    expect(html).toContain('target="_blank"');
    eventConfig.registrationOpen = false;
  });
});
