# Cách chạy code:
## Do file node_modules không úp lên github được nên phải tạo Project Expo mới để lầy file node_modules:
1. Tạo project Expo mới:

```
npx create-expo-app@latest name
```

2. Copy file node_modules và chuyển vào file baitap đã tải về:
3. Thêm thư viện Async Storage thì mới run được:

```
npm install @react-native-async-storage/async-storage
```