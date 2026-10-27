import { describe, expect, it } from "vitest";
import { DEMO_CREDENTIALS, initialData } from "@/data/mockData";

// Contract tests for the supplied business facts and demo rules.
describe("Demo data contract", () => {
  it("keeps the supplied company registration details", () => {
    const data = initialData();
    expect(data.company.name).toBe(
      "Shri Sant Kashimai Agro Farmer Producer Company Limited",
    );
    expect(data.company.incorporationDate).toBe("August 7, 2026");
    expect(data.company.cin).toBe("U01619ME2026PTC476123");
    expect(data.company.address).toContain("Ahmedpur, Latur, Maharashtra, 413515");
  });

  it("never fabricates contact details — phone and email start empty", () => {
    const data = initialData();
    expect(data.company.phone).toBe("");
    expect(data.company.email).toBe("");
    expect(data.company.clientName).toBe("");
  });

  it("uses the specified demo admin credentials", () => {
    expect(DEMO_CREDENTIALS).toEqual({ username: "admin", password: "Admin@123" });
  });

  it("ships the eight service categories and twelve gallery entries", () => {
    const data = initialData();
    expect(data.services).toHaveLength(8);
    expect(data.gallery).toHaveLength(12);
  });
});
