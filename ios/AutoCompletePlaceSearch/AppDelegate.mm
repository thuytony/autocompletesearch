#import <GoogleMaps/GoogleMaps.h>

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"AutoCompletePlaceSearch";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.

  [GMSServices provideAPIKey:@"AIzaSyBZqS7Gy8AD1yX26c6d71l9dEM6zTE0wAs"]; // add this line using the api key obtained from Google Console

  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
