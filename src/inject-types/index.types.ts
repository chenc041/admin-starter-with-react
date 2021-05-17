const generateSymbolType = (type: string) => Symbol.for(`__${(type + '_service_types').toUpperCase()}__`);

export const USER_SERVICE = generateSymbolType('user');
export const HTTP_SERVICE = generateSymbolType('http');
