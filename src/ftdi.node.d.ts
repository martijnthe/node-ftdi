interface FtdiNativeModule {
  hello(): string;
}

declare module "bindings" {
  function bindingsFunc(id: 'ftdi.node'): FtdiNativeModule;
  export = bindingsFunc;
}
