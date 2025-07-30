/** @type {AppTypes.Config} */
window.config = {
  routerBasename: '/',
  extensions: [],
  modes: [],
  showStudyList: true,
  maxNumberOfWebWorkers: 3,
  showWarningMessageForCrossOrigin: true,
  showCPUFallbackMessage: true,
  showLoadingIndicator: true,
  useNorm16Texture: true,
  strictZSpacingForVolumeViewport: true,
  investigationalUseDialog: {
	option: 'never'
  },
  studyPrefetcher: {
    enabled: true,
    displaySetsCount: 2,
    maxNumPrefetchRequests: 10,
    order: 'closest',
  },
  maxNumRequests: {
    interaction: 100,
    thumbnail: 75,
    prefetch: 10,
  },
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
      configuration: {
        friendlyName: 'orthanc',
        name: 'orthanc',
        wadoUriRoot: "/wado",
        qidoRoot: "/pacs/dicom-web",
        wadoRoot: "/pacs/dicom-web",
        qidoSupportsIncludeField: true,
        supportsReject: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: true,
        singlepart: "bulkdata,video,pdf",
        dicomUploadEnabled: true
      },
    },
  ],
  httpErrorHandler: error => {
    console.warn(`HTTP Error Handler (status: ${error.status})`, error);
  },
 whiteLabeling: {
   createLogoComponentFn: function (React) {
 	return React.createElement(
 	  "a",
 	  {
		target: "_blank", // Opens in a new tab
		rel: "noopener noreferrer", // Improves security when opening new tabs
		className: "header-brand",
		href: "https://mediverse.ai", // URL for the link
	  },
	  React.createElement("img", {
		src: "./logo.svg",
		style: {
		  display: "block",
		  backgroundSize: "contain",
		  backgroundRepeat: "no-repeat",
		  width: "15%",
		  height: "95%",
		},
	  }),
	);
  },
 },
  defaultDataSourceName: 'dicomweb',
};
