function base64ToUint8Array(str) {
  const data = atob(str);
  const size = data.length;
  const bytes = new Uint8Array(size);
  for (let i = 0; i < size; i++) {
    bytes[i] = data.charCodeAt(i);
  }
  return bytes;
}

// ROLLUP_NO_REPLACE 
 const welcome = base64ToUint8Array("PHRlbXBsYXRlPg0KICA8RUNvbnRhaW5lcj4NCiAgICA8RUhlYWRpbmcgY2xhc3M9Im14LTAgbXktWzMwcHhdIHAtMCB0ZXh0LWNlbnRlciB0ZXh0LVsyNHB4XSBmb250LWJvbGQgdGV4dC1ibGFjayI+DQogICAgICBDb25maXJtYcOnw6NvIGRlIFJlZ2lzdHJvDQogICAgPC9FSGVhZGluZz4NCiAgICA8RVRleHQgY2xhc3M9InRleHQtYmxhY2siPg0KICAgICAgT2zDoSwge3sgbmFtZSB9fSEgU2V1IHJlZ2lzdHJvIGZvaSByZWFsaXphZG8gY29tIHN1Y2Vzc28gbm8gbm9zc28gc2lzdGVtYS4gDQogICAgPC9FVGV4dD4NCiAgPC9FQ29udGFpbmVyPg0KPC90ZW1wbGF0ZT4NCg0KPHNjcmlwdCBzZXR1cCBsYW5nPSJ0cyI+DQppbXBvcnQgeyBFQ29udGFpbmVyLCBFSGVhZGluZywgRVRleHQgfSBmcm9tICd2dWUtZW1haWwnDQoNCi8vIERlZmluaXIgcHJvcHMgZGlyZXRhbWVudGUgY29tIHNjcmlwdCBzZXR1cA0KZGVmaW5lUHJvcHMoew0KICBuYW1lOiB7DQogICAgdHlwZTogU3RyaW5nLA0KICAgIHJlcXVpcmVkOiB0cnVlLA0KICB9LA0KICBlbWFpbDogew0KICAgIHR5cGU6IFN0cmluZywNCiAgICByZXF1aXJlZDogdHJ1ZSwNCiAgfSwNCn0pDQo8L3NjcmlwdD4NCg==");

export { welcome as default };
//# sourceMappingURL=welcome.mjs.map
