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
}

export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    pairing: string;
}

export interface MenuCategory {
    category: string;
    items: MenuItem[];
}
