const WomenOwned = ({ className, children }: { className: string; children: React.ReactNode }) => (
  <span className={`origin-center -translate-x-1/2 -translate-y-1/2 transform ${className}`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178 102" fill="none">
      <path
        fill="#EA2D23"
        d="M140.112.187H36.948c-3.439 0-6.653 1.726-8.558 4.59L1.743 44.924a10.275 10.275 0 0 0 0 11.356L28.39 96.426a10.277 10.277 0 0 0 8.558 4.59h103.164c3.439 0 6.653-1.726 8.558-4.59l26.647-40.146a10.274 10.274 0 0 0 0-11.356L148.67 4.777a10.276 10.276 0 0 0-8.558-4.59Z"
      />
      <path
        fill="#F6E7E0"
        d="M37.081 39.692c-.463 0-.912.02-1.355.066-.298.033-.582.073-.86.126-.172.02-.33.06-.496.1-.172.039-.35.085-.516.125-.139.04-.271.073-.41.119-.093.02-.172.053-.265.086-.159.06-.317.112-.476.178a8.41 8.41 0 0 0-.51.219c-.02.006-.045.013-.065.033a6.007 6.007 0 0 0-.358.172c-.158.086-.31.165-.462.251a9.135 9.135 0 0 0-.424.265 5.384 5.384 0 0 0-.403.27l-.159.113c-.139.1-.271.205-.41.318a6.128 6.128 0 0 0-.443.383 6.132 6.132 0 0 0-.423.41c-.146.14-.272.278-.41.43-.12.14-.245.278-.358.423-.04.04-.066.073-.092.106-.337.43-.648.893-.94 1.363-.099.172-.198.35-.284.516-.172.33-.33.668-.483 1.005-.006.02-.02.04-.02.06a12.28 12.28 0 0 0-.416 1.09c-.06.193-.12.378-.172.57-.053.178-.106.37-.152.568-.047.192-.093.377-.126.57-.073.376-.139.76-.178 1.15-.02.192-.047.384-.06.575-.007.093-.013.179-.013.265h8.227c-.013-.06-.033-.12-.04-.179a20.05 20.05 0 0 1-.277-1.336 32.998 32.998 0 0 1-.304-1.799c-.033-.231-.06-.462-.086-.68-.06-.536-.1-1.052-.12-1.542-.006-.245-.012-.47-.012-.694 0-2.428.568-4.088 1.997-4.088.066 0 .139.007.205.014.06.006.119.02.178.046.047.006.1.033.153.053.06.02.119.046.178.086.046.02.1.053.146.086.304.178.615.463.912.826.067.073.14.16.199.245.073.086.145.172.205.265.066.092.139.178.198.277.272.41.536.86.8 1.37.1.178.192.363.278.548.41.847.8 1.8 1.158 2.805.04.112.086.231.119.357.086.218.159.437.225.668.073.231.152.47.218.701.106.33.205.675.298 1.012.046.159.092.324.125.483.046.165.093.324.126.49h8.393c.013-.153.013-.298.013-.444 0-6.058-3.922-11.475-11.78-11.475l.007-.02ZM73.906 40.023c2.302 2.123 3.433 5.185 3.433 8.65 0 .483-.007.966-.033 1.462-.013.47-.04.94-.066 1.409-.007.02-.007.053-.007.073h2.368l3.023-11.588h-8.718v-.006Zm-3.59 0h-8.718c2.302 2.123 3.426 5.185 3.426 8.65 0 .483-.007.966-.033 1.462-.013.47-.04.94-.066 1.409-.007.02-.007.053-.007.073h8.294l-2.923-11.462.033-.126-.007-.006Zm-20.431 0 2.963 11.587h8.049l-2.963-11.587h-8.05ZM97.564 40.023c.225.211.437.43.649.648.006.013.02.033.046.046.178.192.357.377.522.575.053.06.106.12.152.179.16.172.311.35.444.53.37.469.721.945 1.038 1.428.311.47.589.945.84 1.428.139.245.258.483.37.728.232.483.437.972.629 1.475.086.218.165.436.244.655.093.277.179.562.265.84.086.264.152.529.218.8.066.264.139.536.192.807.106.476.198.959.271 1.441h2.136V40.016h-8.016v.007Zm-12.943 0V51.61h2.017c-.033-.231-.06-.47-.086-.7a41.18 41.18 0 0 1-.119-1.238c0-.033 0-.066-.006-.099a24.244 24.244 0 0 1-.067-1.197 80.794 80.794 0 0 1-.072-3.796v-1.27l4.193 8.3h8.863L93.51 40.023h-8.889ZM125.304 40.023H108.77V51.61h12.612v-3.472c-.35.357-.701.694-1.065 1.005-1.091.94-2.248 1.673-3.492 2.117V40.85c.853.31 1.66.694 2.447 1.157.384.225.774.476 1.151.74a26.14 26.14 0 0 1 2.732 2.243 38.137 38.137 0 0 1 2.553 2.678c-.166-2.533-.404-5.026-.404-7.652v.007ZM151.713 51.061a6.037 6.037 0 0 0-.04-.483c-.02-.218-.053-.436-.086-.654-.033-.166-.053-.324-.093-.49-.033-.172-.066-.357-.112-.529a10.057 10.057 0 0 0-.304-1.071c-.053-.166-.113-.331-.172-.496a6.627 6.627 0 0 0-.205-.51 4.947 4.947 0 0 0-.192-.423c-.02-.04-.04-.086-.06-.119-.066-.145-.145-.284-.218-.43-.092-.159-.172-.317-.271-.476-.066-.113-.146-.232-.218-.357-.066-.1-.139-.199-.205-.298-.066-.092-.126-.178-.205-.271a4.892 4.892 0 0 0-.318-.41 4.178 4.178 0 0 0-.357-.417c-.119-.139-.251-.264-.377-.403-.119-.113-.245-.225-.364-.35a11.498 11.498 0 0 0-.535-.444 5.156 5.156 0 0 0-.377-.278c-.113-.086-.232-.165-.358-.251-.158-.106-.324-.205-.489-.304-1.693-.992-3.783-1.574-6.25-1.574h-11.151V51.61h8.049V41.352h2.097c.549 0 1.051.179 1.494.496.073.053.146.106.219.172.066.053.145.12.211.198.066.06.126.126.199.205.264.311.516.682.74 1.105.053.1.106.205.159.318.02.052.053.105.073.158.046.093.086.192.126.298.052.112.099.231.145.364.046.119.093.251.139.377.046.125.093.264.126.403.105.33.198.688.277 1.058.04.146.067.285.1.43a23.34 23.34 0 0 1 .423 3.228c.02.317.04.641.046.965 0 .16.007.318.007.483h8.347c-.007-.178-.014-.364-.034-.549h.014Z"
      />
      <path
        fill="#8DC8E8"
        d="M48.847 51.61c-.172 6.131-4.12 12.692-11.766 12.692-7.645 0-11.772-5.589-11.772-11.812 0-.298.006-.589.033-.887h8.227c1.283 5.483 3.803 11.099 5.88 11.099 1.429 0 1.998-1.733 1.998-4.187 0-1.99-.378-4.458-.993-6.912h8.393v.007ZM79.603 51.61l-3.227 12.362h-8.05l-1.759-9.478-2.493 9.478h-8.05l-3.16-12.362h8.048l2.527 9.868c.688-3.135 1.263-6.587 1.488-9.868h8.294l2.526 9.868c.688-3.135 1.264-6.587 1.495-9.868h2.368-.007ZM105.581 51.61v12.362h-8.843l-6.25-12.362h8.87l4.563 9.075v-1.27c0-2.586-.059-5.225-.476-7.805h2.136ZM92.64 63.978h-8.017V51.617h2.017c.589 4.385 2.11 8.65 6 12.361ZM126.11 63.978h-17.335V51.617h12.613v3.518c-1.429-1.435-2.963-2.467-4.557-3.102v10.781c3.532-.668 6.588-2.659 8.883-6.488 0 2.493.138 4.53.403 7.652h-.007ZM151.754 52c0 5.986-3.922 11.978-11.839 11.978h-11.151V51.617h8.049v11.032h2.103c2.996 0 4.491-5.35 4.491-10.675 0-.119 0-.231-.007-.357h8.347c.007.126.007.258.007.384Z"
      />
      <path
        fill="#F6E7E0"
        d="m55.725 20.723 2.321-.218c.33 1.965.662 3.704.979 5.219.317 1.514.675 3.082 1.065 4.695h.158c.47-1.322 1.297-3.81 2.48-7.467a7.29 7.29 0 0 1-.099-.463 33.514 33.514 0 0 1-.357-1.66l2.203-.198c.39 1.845.76 3.439 1.124 4.795.364 1.356.827 3.022 1.402 4.993h.218c.774-3.3 1.436-6.6 1.985-9.914l2.242.238c-.814 3.909-1.865 7.97-3.142 12.176h-2.506c-.907-2.632-1.614-4.834-2.123-6.607h-.258l-.16.503c-.932 2.857-1.626 4.894-2.082 6.104h-2.302a148.747 148.747 0 0 1-3.142-12.196h-.006ZM74.071 31.53c-.873-1.031-1.31-2.56-1.31-4.576 0-2.23.457-3.89 1.363-4.974.906-1.085 2.328-1.634 4.266-1.634 3.486 0 5.225 2.05 5.225 6.151 0 2.216-.456 3.87-1.369 4.954-.913 1.085-2.341 1.634-4.272 1.634-1.72 0-3.023-.516-3.896-1.555h-.007Zm6.541-.833c.536-1.217.8-2.5.8-3.863 0-1.044-.099-1.884-.297-2.526-.198-.642-.542-1.118-1.032-1.442-.49-.324-1.164-.483-2.03-.483-.986 0-1.773.12-2.361.358-.496 1.124-.741 2.407-.741 3.862 0 1.045.106 1.885.31 2.533.206.648.556 1.131 1.04 1.442.489.31 1.157.47 2.01.47.946 0 1.713-.12 2.301-.364v.013ZM86.34 20.545h2.785l2.5 6.766h.14l2.519-6.766h2.765l.482 12.374H95.31l-.218-6.23.02-3.122-.159-.04-2.4 6.006h-1.7l-2.401-6.006-.16.04.04 3.122-.238 6.23h-2.222l.483-12.374h-.013ZM101.468 32.602c-.807-.33-1.21-.92-1.21-1.76v-10.29h8.433v2.023h-6.251v3.248h5.49v1.924h-5.49v3.162c.801.132 1.641.198 2.52.198 1.323 0 2.487-.125 3.506-.377l.377 1.945c-.999.29-2.315.443-3.942.443-1.482 0-2.626-.165-3.433-.503v-.013ZM111.375 20.545h2.705l5.146 9.57.158-.04-.218-3.18v-6.35h2.222v12.374h-2.705l-5.165-9.57-.159.04.218 3.2v6.33h-2.202V20.545Z"
      />
      <path
        fill="#8DC8E8"
        d="m92.49 76.904-3.96-3.962-3.962 3.962 3.961 3.96 3.962-3.96ZM106.104 76.905l-3.961-3.961-3.962 3.96 3.962 3.962 3.961-3.961ZM78.88 76.909l-3.962-3.961-3.961 3.96 3.961 3.962 3.961-3.961Z"
      />
    </svg>
    {children}
  </span>
);
export default WomenOwned;
