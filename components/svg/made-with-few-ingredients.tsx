const MadeWithFewIngredients = ({
  className,
  children
}: {
  className: string;
  children: React.ReactNode;
}) => (
  <span className={`origin-center -translate-x-1/2 -translate-y-1/2 transform ${className}`}>
    <svg xmlns="http://www.w3.org/2000/svg" width={104} height={134} fill="none">
      <path
        fill="#FF7200"
        d="M103.188 51.247C103.188 22.944 80.245 0 51.943 0 23.642 0 .7 22.944.7 51.247v31.264c0 28.303 22.943 51.247 51.244 51.247 28.302 0 51.245-22.944 51.245-51.247V51.247Z"
      />
      <path
        fill="#F6E7E0"
        d="m24.324 87.202.376 1.76-9.885 2.106-.375-1.76 9.884-2.106ZM24.712 90.102l.919 2.01-5.369 7.069.084.107 2.29-1.24 4.719-2.154.751 1.652-9.198 4.194-.919-2.01 5.363-7.081-.084-.108-2.308 1.247-4.7 2.142-.746-1.635 9.198-4.193ZM22.433 104.842c.09-1.128.728-2.237 1.927-3.323 1.27-1.151 2.535-1.76 3.8-1.831 1.264-.072 2.427.477 3.49 1.646a8.727 8.727 0 0 1 1.169 1.599c.304.543.5 1.014.59 1.42l-.608.548c-.43.388-.848.674-1.26.853l-.924-1.02.8-.942c-.203-.376-.585-.865-1.146-1.48a9.492 9.492 0 0 0-1.497-1.36 7.743 7.743 0 0 0-1.623.722 9.145 9.145 0 0 0-1.527 1.116c-.87.793-1.342 1.539-1.407 2.249-.066.703.256 1.449.966 2.236.447.496.877.889 1.294 1.188l1.76-1.593-1.539-1.694 1.14-1.032 2.141 2.362.06 1.139-1.975 1.79c-.34.31-.745.465-1.223.465-.477 0-.978-.137-1.503-.429-.525-.287-1.032-.704-1.527-1.247-1.02-1.122-1.485-2.249-1.396-3.382h.018ZM34.502 116.152c-.12-.227-.161-.495-.12-.818l.215-2.141c.036-.334.048-.597.03-.781a1.196 1.196 0 0 0-.214-.567c-.126-.191-.34-.376-.639-.555l-1.026-.614-1.992 3.328-1.545-.924 5.04-8.423c1.027.256 1.987.656 2.876 1.187 1.115.668 1.831 1.378 2.147 2.141.316.764.215 1.587-.322 2.476-.68 1.133-1.682 1.634-3.018 1.509l-.078.125c.18.233.304.466.382.704.078.233.107.507.101.823l-.113 2.261.573.513-.52.871c-.31-.071-.68-.232-1.097-.489-.328-.197-.549-.406-.668-.632l-.012.006Zm1.223-5.482c.34 0 .644-.078.907-.227.262-.149.5-.406.715-.764.299-.495.358-.93.185-1.312-.173-.376-.59-.763-1.246-1.151-.43-.257-.812-.442-1.14-.549l-1.61 2.696 2.189 1.313v-.006ZM40.085 118.305c-.573-.43-.77-.978-.597-1.641l2.124-8.136 6.663 1.736-.417 1.598-4.94-1.288-.668 2.565 4.337 1.133-.4 1.521-4.336-1.133-.65 2.499a13.33 13.33 0 0 0 1.95.681c1.044.274 1.992.411 2.845.423l-.101 1.617c-.853.023-1.92-.132-3.21-.466-1.169-.304-2.04-.674-2.612-1.103l.012-.006ZM49.008 110.574c.93-.269 1.974-.418 3.126-.448 1.742-.047 3 .346 3.77 1.188.77.841 1.18 2.087 1.228 3.746.03 1.145-.095 2.099-.387 2.857-.286.764-.823 1.36-1.61 1.79-.782.429-1.886.668-3.3.709l-2.553.072-.28-9.908.006-.006Zm2.935 8.178c1.223-.036 2.225-.179 3.012-.429.143-.376.245-.83.31-1.366.066-.537.09-1.092.078-1.671-.024-.859-.137-1.551-.34-2.07-.203-.519-.525-.894-.972-1.127-.448-.233-1.056-.34-1.82-.316-.435.012-.9.059-1.39.137l.197 6.866.913-.024h.012ZM57.598 109.727l1.748-.418 2.35 9.831-1.748.418-2.35-9.831ZM65.52 117.702c-.715.03-1.21-.274-1.497-.894l-3.501-7.642 6.257-2.869.686 1.503-4.64 2.124 1.103 2.41 4.074-1.867.656 1.425-4.074 1.867 1.073 2.351a12.56 12.56 0 0 0 1.94-.71c.984-.448 1.807-.943 2.469-1.474l.942 1.313c-.644.56-1.569 1.115-2.78 1.67-1.097.507-2.004.77-2.72.799l.012-.006ZM67.398 105.986l1.659-1.461 8.321 3.09.078-.114-1.855-1.831-3.43-3.889 1.36-1.199 6.68 7.581-1.658 1.462-8.333-3.078-.078.113 1.868 1.843 3.418 3.878-1.349 1.187-6.68-7.582ZM76.774 98.571l-1.706 2.756-1.42-.877 4.355-7.038 1.42.876-1.706 2.756 7.176 4.438-.949 1.528-7.176-4.439h.006ZM86.761 96.502l-1.282-1.014c.733-.734 1.264-1.658 1.598-2.768.185-.614.299-1.157.334-1.623-.238-.184-.548-.334-.924-.447-.4-.12-.734-.083-1.014.107-.28.191-.597.591-.949 1.2-.376.65-.74 1.169-1.091 1.568-.352.4-.758.674-1.223.83-.466.155-1.002.143-1.617-.042-.847-.257-1.455-.746-1.82-1.468-.37-.727-.375-1.67-.03-2.84.198-.655.425-1.198.681-1.616.256-.417.555-.787.889-1.11l.566.168c.24.071.513.185.824.334.31.149.548.292.727.423l-.4 1.33-1.318-.208c-.19.4-.34.8-.465 1.21-.173.573-.197 1.02-.077 1.343.119.322.405.549.853.68.387.113.721.066 1.002-.155.28-.215.62-.674 1.008-1.378.549-.984 1.097-1.658 1.652-2.016.555-.358 1.259-.406 2.106-.155.877.262 1.497.757 1.855 1.479.358.722.352 1.712-.024 2.965-.387 1.294-1.002 2.362-1.849 3.203h-.012ZM15.227 41.627l.81-2.123 5.895.06.041-.108-4.426-3.895.805-2.106 9.58 3.24-.65 1.693-4.814-1.646-2.38-.925-.077.114 3.883 3.585-.495 1.3-5.285.084-.018.13 2.398.878 4.683 1.998-.65 1.694-9.3-3.973ZM28.315 35.883a115.354 115.354 0 0 1-2.852-4.605 77.105 77.105 0 0 1-2.44-4.432l1.88-2.094a74.732 74.732 0 0 1 4.664 1.95c1.712.776 3.335 1.557 4.886 2.345l-1.17 1.497-1.061-.555c-.782-.405-1.366-.704-1.766-.9l-2.547 2.833a70.825 70.825 0 0 0 1.766 2.637l-1.366 1.324h.006Zm.674-7.528c-1.647-.776-2.852-1.325-3.61-1.635l-.34.376a72.053 72.053 0 0 0 2.005 3.424l1.945-2.165ZM30.658 19.926c.704-.662 1.563-1.27 2.577-1.825 1.527-.841 2.828-1.062 3.896-.668 1.067.393 2.004 1.318 2.803 2.767.555 1.003.871 1.91.96 2.72.09.812-.113 1.587-.614 2.327-.5.74-1.372 1.456-2.613 2.136l-2.236 1.228-4.779-8.685h.006Zm6.347 5.935c1.068-.59 1.897-1.175 2.488-1.76-.042-.399-.161-.852-.346-1.36a10.775 10.775 0 0 0-.698-1.52c-.418-.758-.83-1.319-1.247-1.689-.417-.37-.877-.555-1.378-.555-.507 0-1.091.18-1.76.55-.381.208-.77.459-1.169.757l3.311 6.019.805-.442h-.006ZM44.588 24.03c-.698-.15-1.11-.56-1.235-1.235l-1.515-8.268 6.77-1.24.299 1.622-5.017.919.477 2.607 4.408-.806.28 1.545-4.407.806.465 2.54a13.234 13.234 0 0 0 2.058-.208c1.062-.197 1.98-.465 2.762-.823l.59 1.503c-.763.382-1.795.698-3.102.937-1.193.22-2.135.25-2.833.101ZM59.643 13.68l1.831.525a107.008 107.008 0 0 0-.81 4.259 156.023 156.023 0 0 0-.597 3.89l.119.047c.752-.865 2.124-2.511 4.116-4.94.03-.19.048-.315.06-.381.06-.453.137-.913.22-1.372l1.736.507a77.624 77.624 0 0 0-.578 3.979c-.132 1.14-.275 2.541-.424 4.217l.167.066a122.424 122.424 0 0 0 4.468-6.944l1.635.853a112.686 112.686 0 0 1-6.025 8.316l-1.903-.746c.095-2.273.215-4.157.358-5.655l-.197-.077-.269.334c-1.563 1.89-2.702 3.233-3.406 4.02l-1.747-.686c.28-3.454.697-6.854 1.252-10.212h-.006ZM74.896 21.107l1.396 1.133-6.359 7.857-1.396-1.134 6.359-7.856ZM79.757 28.128l-1.993-2.553 1.319-1.026 5.088 6.525-1.318 1.026-1.993-2.553-6.651 5.19-1.103-1.42 6.65-5.19ZM86.212 34.893l.59 1.7-4.139 1.443 1.372 3.937 4.14-1.443.59 1.7-9.544 3.328-.59-1.7 3.83-1.336-1.373-3.937-3.83 1.336-.59-1.7 9.544-3.328ZM17.422 70.004l3.43-3.43-3.43-3.429-3.429 3.43 3.43 3.428ZM83.03 66.576l3.429 3.43 3.43-3.43-3.43-3.43-3.43 3.43ZM53.42 40.069c1.79.984 2.691 3.937.71 7.605-.214.394-.59.507-.984.293-.393-.215-.507-.591-.292-.985 1.378-2.559 1.08-4.969-.131-5.637-1.3-.716-4.558.465-7.672 6.013-.429.77-5.124 9.789-9.699 18.522l5.291-.453c.448-.036.752.214.788.662.035.447-.215.745-.662.787l-6.216.531c-2.142 4.098-4.522 8.644-7.129 13.625-.149.286-.334.387-.644.387a.594.594 0 0 1-.334-.083c-.4-.209-.513-.585-.304-.984 2.177-4.17 4.468-8.543 6.699-12.808l-5.65.484h-.065c-.418 0-.686-.245-.722-.669-.035-.447.215-.751.662-.787l6.574-.56c3.382-6.461 9.622-18.44 10.147-19.382 3.782-6.746 7.6-7.7 9.64-6.58l-.006.019ZM46.31 74.332a7.013 7.013 0 0 1-1.914-.25c-1.951-.543-3.144-1.987-3.144-3.722 0-3.234 3.657-7.72 7.224-7.72 1.628 0 2.78 1.009 2.851 2.422v.096c0 1.151-.728 2.684-2.953 3.841-1.431.746-3.656 1.516-5.655 1.468.024 1.348 1.247 1.986 2.07 2.213 3.925 1.092 7.815-2.243 9.479-4.647.257-.37.644-.441 1.014-.185.37.257.442.644.185 1.014-2.565 3.71-6.025 5.464-9.15 5.464l-.007.006Zm-3.358-5.315c1.646 0 3.615-.715 4.754-1.306 1.736-.9 2.166-2.153 2.166-2.571-.006-.173-.048-1.038-1.396-1.038-2.279 0-4.838 2.72-5.524 4.915Z"
      />
      <path
        fill="#F6E7E0"
        d="M76.726 68.105c.393.215.5.596.286.99-1.688 3.066-3.818 3.454-5.053 2.893-.924-.423-1.598-1.312-1.974-2.91l-1.3 1.98c-1.683 2.111-3.663 3.25-5.375 3.25-.507 0-.925-.089-1.342-.304-.537-.268-1.432-.924-1.468-2.577-1.61 1.897-3.28 2.882-4.694 2.882a2.24 2.24 0 0 1-1.074-.245c-.638-.328-1.88-1.312-.99-4.563.441-1.629 1.24-3.049 2.487-5.28l.615-1.097c.214-.394.596-.501.99-.28.393.22.5.596.286.99l-.62 1.103c-1.163 2.07-1.957 3.496-2.356 4.951-.454 1.67-.102 2.703.244 2.882.59.304 2.464-.34 4.277-2.613.525-.662 1.27-1.772 1.998-2.947.406-.835.92-1.748 1.551-2.87.215-.38.442-.78.68-1.21.221-.394.597-.501.99-.28.317.178.454.459.37.775a.846.846 0 0 1-.053.161c-.388.937-1.3 2.583-2.261 4.134a11.54 11.54 0 0 0-.764 1.974c-.334 1.241-.226 2.482.454 2.828.895.453 3.114-.304 4.915-2.56.805-1.007 1.891-3.358 3.204-6.907.155-.423.513-.584.936-.43.418.156.585.514.43.937-1.402 3.776-.627 6.425.447 6.914.758.346 2.13-.37 3.173-2.267.215-.394.59-.5.99-.286v-.018Z"
      />
    </svg>
    {children}
  </span>
);
export default MadeWithFewIngredients;