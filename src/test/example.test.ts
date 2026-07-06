import { describe, it, expect } from "vitest";
import { content } from "@/content/portfolio";

describe("portfolio content", () => {
    it("provides testimonials data for the testimonials section", () => {
        expect(Array.isArray(content.testimonials)).toBe(true);
        expect(content.testimonials.length).toBeGreaterThan(0);
    });
});
