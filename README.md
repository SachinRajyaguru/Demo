├── api
│ ├── ApiFunction.ts
│ ├── ApiManager.ts
│ ├── CommonApi.ts
│ ├── ImageUploadS3.ts
│ ├── StatusCode.ts
│ ├── UrlFactory.ts
│ ├── api-types.ts
│ └── index.ts
├── assets
│ ├── SvgIcons.js
│ ├── countries.json
│ ├── fonts
│ │ ├── Montserrat-Black.ttf
│ │ ├── Montserrat-BlackItalic.ttf
│ │ ├── Montserrat-Bold.ttf
│ │ ├── Montserrat-BoldItalic.ttf
│ │ ├── Montserrat-ExtraBold.ttf
│ │ ├── Montserrat-ExtraBoldItalic.ttf
│ │ ├── Montserrat-ExtraLight.ttf
│ │ ├── Montserrat-ExtraLightItalic.ttf
│ │ ├── Montserrat-Italic.ttf
│ │ ├── Montserrat-Light.ttf
│ │ ├── Montserrat-LightItalic.ttf
│ │ ├── Montserrat-Medium.ttf
│ │ ├── Montserrat-MediumItalic.ttf
│ │ ├── Montserrat-Regular.ttf
│ │ ├── Montserrat-SemiBold.ttf
│ │ ├── Montserrat-SemiBoldItalic.ttf
│ │ ├── Montserrat-Thin.ttf
│ │ └── Montserrat-ThinItalic.ttf
│ ├── icons
│ │ ├── DesignerClubLogo.png
│ │ ├── DesignerClubLogo@2x.png
│ │ ├── DesignerClubLogo@3x.png
│ │ ├── splash.png
│ │ ├── splash@2x.png
│ │ └── splash@3x.png
│ ├── images
│ │ ├── CheckEmail.png
│ │ ├── CheckEmail@2x.png
│ │ ├── CheckEmail@3x.png
│ │ ├── MyEarnings.png
│ │ ├── MyEarnings@2x.png
│ │ ├── MyEarnings@3x.png
│ │ ├── StaticImages
│ │ │ ├── HomePage.png
│ │ │ ├── HowItWorks.jpeg
│ │ │ ├── ListYourItem.jpeg
│ │ │ ├── driving_licence.jpeg
│ │ │ └── profile_yellow.jpeg
│ │ ├── ThankYou.png
│ │ ├── ThankYou@2x.png
│ │ └── ThankYou@3x.png
│ └── index.js
├── common
│ ├── GConstants.js
│ ├── fbsdk_authentication.js
│ ├── functions.js
│ └── validator.js
├── components
│ ├── AppPhoneNumberTextInput.js
│ ├── AppTextInput.js
│ ├── BackButton.js
│ ├── Box.js
│ ├── Button.js
│ ├── CountryPicker.js
│ ├── FlexView.js
│ ├── GImagePicker.js
│ ├── HamburgerMenuButton.js
│ ├── HeaderButton.js
│ ├── HeaderButtonContainer.js
│ ├── ItemSeparatorComponent.js
│ ├── Line.js
│ ├── ListEmptyComponent.js
│ ├── Loader.js
│ ├── MediumText.js
│ ├── MyCalendar.js
│ ├── MySlider.js
│ ├── MyTabBar.js
│ ├── Or.js
│ ├── RegularText.js
│ ├── SocialButton.js
│ ├── StepIndicator.js
│ ├── SubTitle.js
│ ├── TermsAndConditions.js
│ ├── Title.js
│ ├── Total.js
│ ├── UploadDocumentView.js
│ ├── ball-indicator
│ │ ├── index.js
│ │ └── styles.js
│ ├── higher_order_components
│ │ ├── withUser.js
│ │ └── withdLoading.js
│ └── index.js
├── containers
│ └── Container.js
├── navigation
│ ├── AppNavigation.js
│ ├── BottomTab.js
│ ├── CustomDrawerContent.js
│ ├── DrawerTab.js
│ ├── RootNavigation.js
│ └── screen-names.js
├── redux
│ ├── actions
│ │ └── appActions.js
│ ├── reducers
│ │ ├── appReducer.js
│ │ └── filtersReducer.js
│ ├── slices
│ │ ├── address-reducer.ts
│ │ ├── loading-slice.js
│ │ └── user-slice.ts
│ └── store.ts
├── screens
│ ├── Account
│ │ ├── AccountComponents
│ │ │ ├── AccountOption.js
│ │ │ └── index.js
│ │ ├── ChangePasswordScreen.js
│ │ ├── ContactUsScreen.js
│ │ ├── DisputesListScreen.js
│ │ ├── EnquiryScreen.js
│ │ ├── GenerateEnquiriesScreen.js
│ │ ├── ManageAddressesScreen.js
│ │ ├── MyEarningScreen.js
│ │ ├── PaymentMethodScreen.js
│ │ ├── PayoutDetailsScreen.js
│ │ ├── PersonalProfileScreen.js
│ │ ├── ProfileScreen.js
│ │ ├── WebViewScreens.js
│ │ └── index.js
│ ├── Authentication
│ │ ├── CheckMailScreen.js
│ │ ├── CompleteProfileScreen.js
│ │ ├── ForgotPasswordScreen.js
│ │ ├── LoginScreen.js
│ │ ├── PhoneVerificationScreen.js
│ │ ├── RegisterScreen.js
│ │ ├── ResetPasswordScreen.js
│ │ └── index.js
│ ├── Chat
│ │ ├── ChatComponents
│ │ │ ├── ChatMessage.js
│ │ │ ├── ChatMessageDetails.js
│ │ │ ├── ChatProfile.js
│ │ │ ├── ChatTime.js
│ │ │ └── Message.js
│ │ ├── ChatListScreen.js
│ │ ├── ChatScreen copy.js
│ │ ├── ChatScreen.js
│ │ ├── ChatWithAdminScreen.js
│ │ ├── chat-util.js
│ │ └── index.js
│ ├── CommonUI
│ │ ├── AddAddressScreen.js
│ │ ├── AddCardScreen.js
│ │ ├── ScreenModals
│ │ │ ├── ListOfShippingCarrier.js
│ │ │ └── ListOfStatesModal.js
│ │ └── index.js
│ ├── Home
│ │ ├── CouponCodeScreen.js
│ │ ├── FilterScreen.js
│ │ ├── FilterScreenComponents
│ │ │ ├── HorizontalList.js
│ │ │ └── index.js
│ │ ├── HomeScreen.js
│ │ ├── HomeScreenComponents
│ │ │ ├── HorizontalSection.js
│ │ │ ├── HorizontalSectionItem.js
│ │ │ ├── HorizontalSectionRounded.js
│ │ │ ├── HorizontalSectionRounedItem.js
│ │ │ ├── HorizontalSectionText.js
│ │ │ ├── HowItWorks.js
│ │ │ ├── SearchBar.js
│ │ │ ├── ShopByCategory.js
│ │ │ └── index.js
│ │ ├── HowItWorksScreen.js
│ │ ├── MyCartDeliveryScreen.js
│ │ ├── MyCartOrderScreen.js
│ │ ├── MyCartPaymentScreen.js
│ │ ├── MyCartScreen.js
│ │ ├── NotificationListScreen.js
│ │ ├── ProductDetailsScreen.js
│ │ ├── SearchProductScreen.js
│ │ ├── SearchRentalsScreen.js
│ │ ├── ShopByCategoryScreen.js
│ │ ├── TopRenterScreen.js
│ │ ├── WishlistScreen.js
│ │ └── index.js
│ ├── Orders
│ │ ├── AddPostageDetailsScreen.js
│ │ ├── CancelOrderWarningScreen.js
│ │ ├── CompletedLendingScreen.js
│ │ ├── CompletedRentScreen.js
│ │ ├── CurrentLendingScreen.js
│ │ ├── CurrentRentScreen.js
│ │ ├── LendingScreen.js
│ │ ├── OrderDetailsScreen.js
│ │ ├── OrdersComponents
│ │ │ ├── RentItem.js
│ │ │ └── index.js
│ │ ├── OrdersListScreen.js
│ │ ├── RejectOrderScreen.js
│ │ ├── RentScreen.js
│ │ ├── RequestLendingScreen.js
│ │ ├── UpcomingLendingScreen.js
│ │ ├── UpcomingRentScreen.js
│ │ └── index.js
│ └── YourlistingItems
│ ├── AddItemScreen.js
│ ├── YourItemProductDetailsScreen.js
│ ├── YourListItemScreen.js
│ ├── YourlistingItemsComponents
│ │ ├── AddItemScreenTitle.js
│ │ ├── CancelableList.js
│ │ ├── HorizontalList.js
│ │ ├── HorizontalSection.js
│ │ ├── HorizontalSectionItem.js
│ │ ├── HorizontalSectionText.js
│ │ ├── ImageList.js
│ │ └── index.js
│ └── index.js
└── theme
└── index.js
