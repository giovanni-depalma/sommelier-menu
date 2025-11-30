export interface WineItem {
    id: string;
    name: string;
    producer: string;
    region: string;
    country: string;
    vintage: string;
    type: 'Bollicine' | 'Bianchi' | 'Rosati' | 'Rossi' | 'Passiti/Distillati';
    grape: string;
    price: number;
    description: string;
    denomination: string;
    details?: string;
}

export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    pairing: string;
    pairingReason?: string;
}

export interface MenuCategory {
    category: string;
    items: MenuItem[];
}
