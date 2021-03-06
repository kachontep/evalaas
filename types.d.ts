module Express {
  interface Request {
    env: { [key: string]: string }
  }
}

module Evalaas {
  type ModuleCache = { [filename: string]: ModuleCacheEntry }
  type ModuleCacheEntry = {
    hash: string
    source: string
    module: {
      exports: any
    }
  }

  type Storage = {
    bucket: (bucketName: string) => Bucket
  }
  type Bucket = {
    file: (key: string) => File
  }
  type File = {
    download: () => Promise<[Buffer]>
  }
}
