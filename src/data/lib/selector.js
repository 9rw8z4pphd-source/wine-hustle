import { WINES } from "../entities/wines";

export function getWinesByRegion(regionId) {
  return Object.values(WINES).filter(w => w.region_id === regionId);
}

export function getWineById(id) {
  return WINES[id] ?? null;
}